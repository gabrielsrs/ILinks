const addNewLink = document.querySelector('#add-link-btn');
const overlay = document.querySelector('#overlay')
const linkSettingsBox = document.querySelector('#link-settings-box')
const categoryCard = document.querySelector('#category-card')
const outCard = document.querySelector('#out-card')
const removeLink = document.querySelector('#remove-btn')
const saveLink = document.querySelector('#done-btn')
const titleLink = document.querySelector('#title-settings-field')
const contentTag = document.querySelector("#tag-settings")
const overlayTag = document.querySelector("#overlay-tag")
const tagLink = document.querySelector('#tag-settings-field')
const link = document.querySelector('#link-settings-field')
const contentLinks = document.querySelector('#cards-grid')

let editLink = document.querySelectorAll('.card-edit')
let cards = document.querySelectorAll('.slim-card')

// tag
const addTag = document.querySelector('#add-tag')
const dialog = document.querySelector('#dialog')
const showTagsContent = document.querySelector('#show')
const saveTags = document.querySelector('#hide')
const dialogContent = document.querySelector('#dialog-content')
const toggleAddTag = document.querySelector('#add-new-tag')
const removeTag = document.querySelector('#remove-tag')
const removeTagMsg = document.querySelector('#remove-tag-msg')
let allTags = document.querySelectorAll(".tag")

// import { Delete, Update } from "./request"

// Save/Get item in the Local Storage
// class ManipulateLocalStorage {
//   constructor(nameOfKey, newObject) {
//     this.nameOfKey = nameOfKey
//     this.newObject = newObject
//   }

//   saveNewObject() {
//     localStorage.setItem(this.nameOfKey, JSON.stringify(this.newObject))
//   }

//   getObject() {
//     return JSON.parse(localStorage.getItem(this.nameOfKey))
//   }
// }

// Wheel from tags on situation tags get over the content
showTagsContent.addEventListener('wheel', (event) => {
  event.preventDefault()

  showTagsContent.scrollBy({
    left: event.deltaY < 0 ? -7 : 7
  })
})

// Load Local Storage items
// window.addEventListener('load', () => {
//   const linksStorage = new ManipulateLocalStorage(nameOfKey = "links", newObject=[])
//   const resultLocalStorageLinks = linksStorage.getObject()

//   if(resultLocalStorageLinks) {
//     for(item of resultLocalStorageLinks) {
//       loadData(item.name, item.link)
//       editCards()
//     }

//   } else if(resultLocalStorageLinks == null) {
//     linksStorage.saveNewObject()

//   }

//   const tagsStorage = new ManipulateLocalStorage(nameOfKey = "tags", newObject={})
//   const resultLocalStorageTags = tagsStorage.getObject()

//   if(resultLocalStorageTags) {
//     for(item in resultLocalStorageTags) {
//       loadTag(false, item, resultLocalStorageTags[item])

//     }
//   } else if(resultLocalStorageTags == null) {
//     tagsStorage.saveNewObject()

//   }

//   borderFilter()
// })

window.addEventListener('load', () => {
  editCards()
})

// Add new link
addNewLink.addEventListener('click', () => {
  categoryCard.innerHTML = `<span>Add Link</span>`
  showOverlay()
  previewTag([])
})


// Edit the exist cars
function editCards() {
  editLink = document.querySelectorAll('.card-edit')
  cards = document.querySelectorAll('.slim-card')

  editLink.forEach((item, index) => {
    item.addEventListener('mouseover', (event) => {
      event.currentTarget.parentElement.parentElement.setAttribute('onclick', 'event.preventDefault()')
    })

    item.addEventListener('mouseout', (event) => {
      event.currentTarget.parentElement.parentElement.removeAttribute('onclick')
    })

    item.addEventListener('click', () => {
      // tagsOnCard = new ManipulateLocalStorage("links")
      // previewTag(tagsOnCard.getObject()[index].tag)

      categoryCard.innerHTML = `<span>Edit Link</span>`

      let cardInformation = cards[index] 

      titleLink.value = cardInformation.children[1].children[0].textContent
      link.value = cardInformation.href

      saveLink.dataset.index = index
      removeLink.dataset.index = index

      showOverlay()
  })
  })

}

linkSettingsBox.addEventListener('submit', () => {

})


// ----

// Save changes on cards
// saveLink.addEventListener('click', (event) => {
//   getItems = new ManipulateLocalStorage("links")
//   allItems = getItems.getObject()

//   if(event.currentTarget.dataset['index']) {
//     if(titleLink.value.trim()) {
//       if(!link.value.trim()) {
//         link.value = ""
//         link.classList.add("placeholder-error")
//         return link.placeholder = "Link Not Found"
//       }

//       let iconEdit
//       let temporaryLink

//       const itemIndex = parseInt(event.currentTarget.dataset['index'])
//       removeDataIndex()

//       if(!(link.value.slice(0, 4) == "http")) {
//         temporaryLink = `https://${link.value}`
//       } else {
//         temporaryLink = link.value
//       }

//       cards[itemIndex].href = temporaryLink
      
//       if(cards[itemIndex].children[0].children[0]){cards[itemIndex].children[0].children[0].remove()}
//       iconEdit = cards[itemIndex].children[0].appendChild(document.createElement('img'))
//       iconEdit.classList.add('icon')
//       iconEdit.src = `${temporaryLink.slice(0, temporaryLink.indexOf('/', 8))}/favicon.ico`
//       iconEdit.alt = "link-image"
      
//       cards[itemIndex].children[1].children[0].innerHTML = titleLink.value
//       cards[itemIndex].children[1].children[0].title = titleLink.value

//       cards[itemIndex].children[0].children[0].addEventListener("error", (event) => {
//         event.currentTarget.style.display = 'none'
//       });
      
//       titleLink.classList.remove("placeholder-error")
//       titleLink.removeAttribute("placeholder")
//       link.classList.remove("placeholder-error")
//       link.placeholder = "https://www.exemple.com"

//       const saveLocalStorage = new ManipulateLocalStorage("links", updateObject(titleLink.value, temporaryLink, allItems, itemIndex))
//       saveLocalStorage.saveNewObject()

//       editCards()

//     } else {
//       titleLink.value = ""
//       titleLink.classList.add("placeholder-error")
//       return titleLink.placeholder = "Text Not Found"
//     }
//   } else {
//     if(titleLink.value.trim()) {
//       if(!link.value.trim()) {
//         link.value = ""
//         link.classList.add("placeholder-error")
//         return link.placeholder = "Link Not Found"
//       }

//       let temporaryLink
//       if(!(link.value.slice(0, 4) == "http")) {
//         temporaryLink = `https://${link.value}`
//       } else {
//         temporaryLink = link.value
//       }

//       newElement(titleLink.value, temporaryLink)

//       cards = document.querySelectorAll('.slim-card')

//       cards[cards.length - 1].children[0].children[0].addEventListener("error", (event) => {
//         event.currentTarget.style.display = 'none'
//       });

//       titleLink.classList.remove("placeholder-error")
//       titleLink.removeAttribute("placeholder")
//       link.classList.remove("placeholder-error")
//       link.placeholder = "https://www.exemple.com"
      
//       const saveLocalStorage = new ManipulateLocalStorage("links", createObject(titleLink.value, temporaryLink, allItems))
//       saveLocalStorage.saveNewObject()

//       editCards()
//       borderFilter()
//     } else {
//       titleLink.value = ""
//       titleLink.classList.add("placeholder-error")
//       return titleLink.placeholder = "Text Not Found"
//     }
//   }

//   hideOverlay()
// })


linkSettingsBox.addEventListener('submit', (event) => {
  if(event.submitter.dataset["index"]) {
    event.preventDefault()
    const updateLink = new UpdateLink()
    updateLink.execute({
      id: event.submitter.dataset["index"],
      title: titleLink.value,
      link: link.value
    })
  } else {
    linkSettingsBox.action = "/save/link"
  }
  hideOverlay()
})


// saveLink.addEventListener('click', (event) => {
//   if(event.currentTarget.dataset['index']) {
//     event.preventDefault()
//     const updateLink = new UpdateLink()
//     updateLink.execute({
//       id: event.currentTarget.dataset['index'],
//       title: titleLink.value,
//       link: link.value
//     })
//   } else {
//     linkSettingsBox.action = "/save/link"
//   }
//   hideOverlay()
// })

// Add new tag
addTag.addEventListener("click", () => {
  if(dialog.open && !toggleAddTag.hasAttribute("hidden")) {
    toggleAddTag.toggleAttribute('hidden')
  } else {
    if(!removeTagMsg.hasAttribute("hidden")) {
      removeTagMsg.toggleAttribute('hidden')
    }
    
    // attTagsState()
    showHideDialog("show")
    toggleAddTag.toggleAttribute('hidden')
  }

  // removeDataState()
})

// Edit tags
showTagsContent.addEventListener("click", () => {
  if(dialog.open) {
    showHideDialog("hide")
  } else {
    // attTagsState()
    showHideDialog("show")
  }
  
})




// // Click save tags
// saveTags.addEventListener("click", () => {
//   const newTagName = document.querySelector('#new-tag-name')
//   const newTagColor = document.querySelector('#new-tag-color')

//   const linkToSaveTag = JSON.parse(localStorage.links)
//   const storageTags = JSON.parse(localStorage.tags)

//   if(!toggleAddTag.hasAttribute("hidden")) { // add tag (input add tag active)
//     if(newTagName.value) {
//       toggleAddTag.toggleAttribute('hidden')
//       addNweTag(newTagName.value, newTagColor.value)
      
//       storageTags[newTagName.value] = newTagColor.value

//       newTagName.value = ""
//       newTagColor.value = ""

//       allTags = document.querySelectorAll(".tag")
//     } else {
//       newTagName.placeholder = "Name not add"
//     }
//   } else if(!removeTagMsg.hasAttribute("hidden")) { // remove tag (msg remove active) saveTags.dataset.state == "remove"
//     allTags.forEach(item => {
//       if(item.children[0].checked) {
//         delete storageTags[item.children[1].textContent]
//         linkToSaveTag.forEach(tagToRemove => {
//           if(tagToRemove.tag.includes(item.children[1].textContent)) {
//             tagToRemove.tag.splice(tagToRemove.tag.indexOf(item.children[1].textContent), 1)
//           }
//         })
  
//         item.remove()
//       }
//     })

//     // previewTag validating if ha ve index or not, same as else below
//     attTagsState()
//     removeTagMsg.toggleAttribute('hidden')
//     // removeDataState()
//   } else { // check tag from a link (save without remove and add tag)
//     const doneIndex = document.querySelector("#done-btn")
//     if(doneIndex.dataset['index']) { // Existent cards
//       const allTagsToSave = document.querySelectorAll('.tag')
//       linkToSaveTag[parseInt(doneIndex.dataset['index'])].tag = []

//       allTagsToSave.forEach(itemToSave => {
//         if(itemToSave.children[0].checked) {
//           linkToSaveTag[parseInt(doneIndex.dataset['index'])].tag.push(itemToSave.children[1].textContent)
//         }
//       })

//       previewTag(linkToSaveTag[parseInt(document.querySelector("#done-btn").dataset["index"])].tag)
//     } else { // when add card
//       const allTagsToSave = document.querySelectorAll('.tag')
//       display_tags = []

//       allTagsToSave.forEach(itemToSave => {
//         if(itemToSave.children[0].checked) {
//           display_tags.push(itemToSave.children[1].textContent)
//         }
//       })

//       previewTag(display_tags)
//     }
//     showHideDialog("hide")
//   }

//   document.querySelectorAll('.tag').forEach(currentColor => {
//     storageTags[currentColor.children[1].textContent] = currentColor.children[2].value
//   })
//   localStorage.setItem("tags", JSON.stringify(storageTags))
//   localStorage.setItem("links", JSON.stringify(linkToSaveTag))

//   borderFilter()
// })




saveTags.addEventListener("click", () => {
  linkSettingsBox.action = "/save/tag"
  showHideDialog("hide")
})

// Remove tag
removeTag.addEventListener("click", () => {
  if(!toggleAddTag.hasAttribute("hidden")) {
    toggleAddTag.toggleAttribute('hidden')
  }

  if(!removeTagMsg.hasAttribute('data-state')) {
    // attTagsState()
  }

  removeTagMsg.toggleAttribute('hidden')

  allTags.forEach(item => {
    item.children[0].checked = false
  })

  // removeDataState()
})


// Exit Editable/Add card state
outCard.addEventListener('click', () => {
  removeDataIndex()
  hideOverlay()

  titleLink.classList.remove("placeholder-error")
  titleLink.removeAttribute("placeholder")
  link.classList.remove("placeholder-error")
  link.placeholder = "https://www.exemple.com"
})

// Remove a card or clean in add card state
removeLink.addEventListener('click', (event) => {
  if(event.currentTarget.dataset['index']) {
    cards[event.currentTarget.dataset['index']].remove()
    const callDelete = new DeleteLink()
    callDelete.execute({
      id: event.currentTarget.dataset['index']
    })

    // const allItems = JSON.parse(localStorage.getItem("links"))
    // allItems.splice(parseInt(event.currentTarget.dataset['index']), 1)
    // localStorage.setItem("links", JSON.stringify(allItems))
    removeDataIndex()
    editCards()
  }

  titleLink.classList.remove("placeholder-error")
  titleLink.removeAttribute("placeholder")
  link.classList.remove("placeholder-error")
  link.placeholder = "https://www.exemple.com"

  hideOverlay()
})

// Clean Overlay content
function cleanOverlay() {
  titleLink.value = ''
  tagLink.value = ''
  link.value = ''
}

// Show Overlay content
function showOverlay() {
  cleanOverlay()
  overlay.style.display = 'flex'
  linkSettingsBox.style.display = 'flex'
}

// Hide Overlay content
function hideOverlay() {
  overlay.style.display = 'none'
  linkSettingsBox.style.display = 'none'
}

// Remove the attribute to identify card
function removeDataIndex() {
  saveLink.removeAttribute("data-index")
  removeLink.removeAttribute("data-index")
}

// Function in the card html for hide non-image state
function errorHandle(error) {
  error.style.display = 'none'
}

// Update local storage
function updateObject(title, link, listLinks, index) {
  listLinks.forEach((item, position) => {
    if(position == index) {
      item.name = title
      item.link = link
    }
  })

  return listLinks
}

// Create user local storage
function createObject(title, link, listLinks) {
  listLinks.push({
		"name": `${title}`,
		"link": `${link}`,
		"tag": Array.from(document.querySelectorAll("#show>div"), (item) => item.textContent)
	}) 

  return listLinks
}

// Show dialog
function showHideDialog(state) {
  if(state == "show") {
    dialog.show()
    overlayTag.hidden = false
    contentTag.classList.add("content-tag")
  } else if (state == "hide") {
    dialog.close()
    if(!toggleAddTag.hasAttribute('hidden')) {
      toggleAddTag.toggleAttribute('hidden')
    }
    if(!removeTagMsg.hasAttribute('hidden')) {
      removeTagMsg.toggleAttribute('hidden')
    }

    overlayTag.hidden = true
    contentTag.classList.remove("content-tag")
  }
}

// function removeDataState() {
//   if(!removeTagMsg.hasAttribute("hidden")) {
//     saveTags.dataset.state = "remove"
//   } else {
//     attTagsState()
//     saveTags.removeAttribute("data-state")
//   }
// }

// Check and uncheck tags
// function attTagsState(addTag=false) {
//   const index = parseInt(document.querySelector("#done-btn").dataset['index'])
//   const tagContentForAddLink = Array.from(document.querySelectorAll("#show>div"), (item) => item.textContent)

//   const titleCurrentLink = JSON.parse(localStorage.getItem("links"))
//   const storageTags = JSON.parse(localStorage.tags)

//   allTags = document.querySelectorAll(".tag")

//   for(tagsItem in storageTags) {
//     if(!isNaN(index)) {// for edit cards
//       if(titleCurrentLink[index].tag.includes(tagsItem)) {
//         allTags.forEach(checkTag => {
//           if(checkTag.children[1].textContent == tagsItem) {
//             checkTag.children[0].checked = true
//           }
//         })
//       } else {
//         allTags.forEach(uncheck => {
//           if(uncheck.children[1].textContent == tagsItem) {
//             uncheck.children[0].checked = false
//           }
//         })
//       }
//     } 
//     else { // for add cards
//       if(tagContentForAddLink.includes(tagsItem)) {
//         allTags.forEach(checkTag => {
//           if(checkTag.children[1].textContent == tagsItem) {
//             checkTag.children[0].checked = true
//           }
//         })
//       } else {
//         allTags.forEach(uncheck => {
//           if(uncheck.children[1].textContent  == tagsItem) {
//             uncheck.children[0].checked = false
//           }
//         })
//       }
//     }
//   }
  
// }

function previewTag(list_tags) {
  showTagsContent.replaceChildren()

  list_tags.forEach(tagName => {
    TagPreViewHtml(tagName)
  })

  // if(index) {
  //   const addTagPreView = JSON.parse(localStorage.getItem("links"))[index].tag
    
  //   addTagPreView.forEach(tagName => {
  //     TagPreViewHtml(tagName)
  //   })
  // }
}

// Load card html
function loadData(title, link) {
  return contentLinks.innerHTML += `
  <a class="slim-card" href="${link}" target="_blank">
      <div class="icon-content">
          <img class="icon" src="${link.slice(0, link.indexOf('/', 8))}/favicon.ico" alt="link-image" onerror="errorHandle(this)">
      </div>
      
      <div class="card-title">
          <span title="${title}">${title}</span>
      </div>

      <div class="card-edit-content">
          <div class="card-edit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
          </div>
      </div>
      
  </a>
  `
}

// Add card html
function newElement(title, link) {
  return contentLinks.innerHTML += `
  <a class="slim-card" href="${link}" target="_blank">
      <div class="icon-content">
          <img class="icon" src="${link.slice(0, link.indexOf('/', 8))}/favicon.ico" alt="link-image" onerror="errorHandle(this)">
      </div>
      
      <div class="card-title">
          <span title="${title}">${title}</span>
      </div>

      <div class="card-edit-content">
          <div class="card-edit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
          </div>
      </div>
      
  </a>
  `
}

function loadTag(check, name, color) {
  return dialogContent.children[1].insertAdjacentHTML("afterend", `
  <div class="tag">
    <input type="checkbox" name="" class="check-tag" ${check? "checked": ""}>
    <label class="tag-name">${name}</label>
    <input type="color" class="color-tag" value="${color}">
  </div>
  `)
}

function addNweTag(name, color) {
  return dialogContent.children[1].insertAdjacentHTML("afterend",`
  <div class="tag">
      <input type="checkbox" name="" class="check-tag">
      <label class="tag-name">${name}</label>
      <input type="color" class="color-tag" value="${color}">
  </div>
  `)
}


// Add tag preview
function TagPreViewHtml(tagName) {
  return showTagsContent.insertAdjacentHTML("beforeend", `
  <div class="selected-tag">${tagName}</div>
  `)
}

function borderFilter() {
  cards = document.querySelectorAll('.slim-card')

  const linkToSaveTag = JSON.parse(localStorage.links)
  const storageTags = JSON.parse(localStorage.tags)

  linkToSaveTag.forEach((item, index) => {
    const tagColor = item.tag.map((tagName) => { return {[tagName]:storageTags[tagName]} } )

    const colors = tagColor.map((a, i) => { return `${Object.values(a)[0]} ${i/tagColor.length*100}%, ${Object.values(a)[0]} ${(i+1)/tagColor.length*100}%` })

    cards[index].style = `
    background: 
      linear-gradient(to right, #bec2d3,#bec2d3) padding-box,
      linear-gradient(to right, ${colors.toString()}) border-box;
    `
  })
}
