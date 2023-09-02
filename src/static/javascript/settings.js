const openSettings = document.querySelector("#settings-icon")
const settings = document.querySelector("#settings")
const importLinks = document.querySelector('#import-link-btn')
const exportLinks = document.querySelector('#export-link-btn')
const chooseFile = document.querySelector('#linksInput')


openSettings.addEventListener("click", () => {
    settings.style.right == '-350px'? settings.style.right='0': settings.style.right='-350px'
})


importLinks.addEventListener('click', function() {
    chooseFile.click()
})

chooseFile.addEventListener('change', function() {
    const file = chooseFile.files[0]

    if (file) {
        const reader = new FileReader()
        reader.readAsText(file)

        reader.onload = function(event) {
            const fileContent = event.target.result

            resultLinks = []
            resultTags = {}
            
            const anchors = fileContent.split("\n").filter(n => n.includes("HREF")).map(x => x.slice(x.indexOf("<A")))
            const anchorsTags = fileContent.split("\n").filter(n => n.includes("DATA-TAG-COLOR")).map(x => x.slice(x.indexOf("<A")))


            anchors.forEach(item => {
                resultLinks.push({
                    'name': `${createKey(item)}`, 
                    'link': `${createValue(item)}`,
                    'tag': linkTag(item)
                })
            })

            anchorsTags.forEach(item => {
                resultTags[createKey(item)] = createValue(item)
            })
            
            
            const currentsLinks = new ManipulateLocalStorage('links')
            const currentsTags = new ManipulateLocalStorage('tags')

            const allLinks = verifyDuplicateLinks(currentsLinks.getObject(), resultLinks)
            const allTags= verifyDuplicateTags(currentsTags.getObject(), resultTags)

            const objectLinkToSave = new ManipulateLocalStorage('links', allLinks)
            const objectTagsToSave = new ManipulateLocalStorage('tags', allTags)

            objectLinkToSave.saveNewObject()
            objectTagsToSave.saveNewObject()

        };
    } else {
        console.log('No file selected.')
    }
});


exportLinks.addEventListener('click', () => {
    const currentsLinks = new ManipulateLocalStorage('links').getObject()
    const currentsTags = new ManipulateLocalStorage('tags').getObject()

    let bookmarkFileContent = '<!DOCTYPE NETSCAPE-Bookmark-file-1>\n'
    bookmarkFileContent += `<!--This is an automatically generated file.
    It will be read and overwritten.
    DO NOT EDIT! -->\n`
    bookmarkFileContent += '<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">\n'
    bookmarkFileContent += '<TITLE>Bookmarks</TITLE>\n'
    bookmarkFileContent += '<H1>Bookmarks</H1>\n'
    bookmarkFileContent += '<DL><p>\n'
    bookmarkFileContent += '    <DT><H3 PERSONAL_TOOLBAR_FOLDER="true">Links</H3>\n'
    bookmarkFileContent += '    <DL><p>\n'

    currentsLinks.forEach(link => {
        bookmarkFileContent += `        <DT><A HREF="${link.link}" DATA-TAG="${JSON.stringify(link.tag)}">${link.name}</A>\n`
    })

    bookmarkFileContent += '    </DL><p>\n'
    bookmarkFileContent += '    <DT><H3 PERSONAL_TOOLBAR_FOLDER="true">Tags</H3>\n'
    bookmarkFileContent += '    <DL><p>\n'

    Object.keys(currentsTags).forEach(tag => {
        bookmarkFileContent += `        <DT><A DATA-TAG-COLOR="${currentsTags[tag]}">${tag}</A>\n`
    })

    bookmarkFileContent += '    </DL><p>\n'
    bookmarkFileContent += '</DL><p>\n'

    const blob = new Blob([bookmarkFileContent], { type: 'text/plain' });

    const a = document.createElement('a');
    a.download = 'bookmarks.html';
    a.href = window.URL.createObjectURL(blob);

    a.click()
})

function createKey(item) {
    return item.slice(item.indexOf(">")+1, item.lastIndexOf("<"))
}

function createValue(item) {
    if(/HREF/.test(item)) {
        return item.slice(item.indexOf('http'), item.indexOf('"', item.indexOf('http')))
    } else {
        return item.slice(item.indexOf('"')+1, item.indexOf('"', item.lastIndexOf('"')))
    }
}

function linkTag(item) {
    if(/DATA-TAG/.test(item)) {
        return JSON.parse(item.slice(item.indexOf("["), item.lastIndexOf("]")+1).replaceAll("'", '"'))
    } else {
        return []
    }
}

function verifyDuplicateLinks(currentLinks=[], importedLinks=[]) {
    const namesCurrentLinks = currentLinks.map(object => object.name)
    const linksCurrentLinks = currentLinks.map(object => object.link)

    for(linkPosition in importedLinks) {
        if(namesCurrentLinks.includes(importedLinks[linkPosition].name) && linksCurrentLinks.includes(importedLinks[linkPosition].link)) {
            linkPosition.splice(linkPosition, 1)
        }
    }

    return [...currentLinks, ...importedLinks]
}

function verifyDuplicateTags(currentTags={}, importedTags={}) {

    return Object.assign({}, importedTags, currentTags)
}