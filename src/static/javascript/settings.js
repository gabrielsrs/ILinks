const openSettings = document.querySelector("#settings-icon")
const settings = document.querySelector("#settings")

openSettings.addEventListener("click", () => {
    settings.style.right == '-500px'? settings.style.right='0': settings.style.right='-500px'
})