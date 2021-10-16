const inputSection = document.getElementById('search')

function changeColor() {
	inputSection.style.boxShadow = "box-shadow: 0 4px 6px rgba(50, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .11);"
}

inputSection.addEventListener('click', changeColor);

const topBtn = document.querySelector('.top')
const footerBtn = document.querySelector('.footer')
const searchBtn = document.querySelector('.icons')

function dontEnter() {
	alert('this button is not supported in brower')
}

function search() {
	alert("can't approach server:(")
}

topBtn.addEventListener('click', dontEnter)
footerBtn.addEventListener('click', dontEnter)
searchBtn.addEventListener('click', search)