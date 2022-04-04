const navbarToggle = document.querySelector('.navbar-toggle')
const navbarClose = document.querySelector('.navbar-close')
const navbarMenu = document.getElementById('navbar')

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.add('navbar-menu_visible')

})

navbarClose.addEventListener('click', () => {
  navbarMenu.classList.remove('navbar-menu_visible')
})


const menuLinks = document.querySelectorAll('.navbar-menu a[href^="#"]')
menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', function() {
    navbarMenu.classList.remove('navbar-menu_visible')
  })
})

const form = document.getElementById('form')
const email = document.getElementById('email')


form.addEventListener('submit', e => {
	e.preventDefault()

	checkInputs()
});

function checkInputs() {

	const emailValue = email.value.trim()


	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank')
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email')
	} else {
		console.log('email is valid')
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small')
	formControl.className = 'form-control error'
	small.innerText = message;
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}