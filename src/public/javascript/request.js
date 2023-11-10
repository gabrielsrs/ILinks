class DeleteLink {
    execute({ id: id }) {
        fetch(`/remove/link/${id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok) {
                console.log("Item removed")
            }
        })
        .catch(err => { 
            console.error(err)
        })
    }
}

class UpdateLink {
    execute({ id: id, title: title, link: link }) {
        fetch(`/update/link/${id}?title=${title}&link=${link}`, {
            method: "PATCH"
       })
        .then(response => {
            if(response.ok) {
                console.log("Item Updated")
            }
        })
        .catch(err => {
            console.error(err)
        })
    }
}

// export { DeleteLink, UpdateLink }