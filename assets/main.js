const dark = document.querySelector(".dark")
const night = document.querySelector(".night")
const light = document.querySelector(".light")
const sidebar = document.querySelector(".sidebar")
const item = document.querySelector(".item")
const activeItem = document.querySelector(".item.active")

dark.addEventListener("click",()=>{
    sidebar.className = "sidebar"
    item.className = "item"
    activeItem.className = "item active"
})

night.addEventListener("click",()=>{
    sidebar.className = "sidebar night"
    item.className = "item night"
    activeItem.className = "item active night"
})

light.addEventListener("click",()=>{
    sidebar.className = "sidebar light"
    item.className = "item light"
    activeItem.className = "item active light"
})