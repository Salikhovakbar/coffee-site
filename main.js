const btnMenu = document.querySelector("#header_menu_bar")
const sidebarBox = document.querySelector(".header_sidebar_box")
const closeBtn = document.querySelector('.sidebar_close_box > i')
btnMenu.addEventListener("click", e => {
sidebarBox.style.right = 0
})

closeBtn.addEventListener('click', e => {
    sidebarBox.style.right = '-100%'
})