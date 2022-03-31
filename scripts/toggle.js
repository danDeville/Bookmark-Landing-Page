const navbarToggle = document.querySelector('.navbar-toggle')
const navbarClose = document.querySelector('.navbar-close')
const navbarMenu = document.querySelector('.navbar-menu')

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('navbar-menu_visible')
})

navbarClose.addEventListener('click', () => {
  navbarMenu.classList.toggle('navbar-menu_visible')
})
