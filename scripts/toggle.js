const navbarToggle = document.querySelector('.navbar-toggle')
const navbarClose = document.querySelector('.navbar-close')
const navbarMenu = document.getElementById('navbar')

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.add('navbar-menu_visible')

})

navbarClose.addEventListener('click', () => {
  navbarMenu.classList.remove('navbar-menu_visible')
})

