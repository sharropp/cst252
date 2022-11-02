document.addEventListener("DOMContentLoaded", () => {



	let box = document.querySelector('.box');
	
	let boxHover = (e) => {
		box.classList.add('box-end-frame', 'fadeInAnimation');
		box.classList.remove('fadeOutAnimation');
	}

	box.addEventListener('mouseover', boxHover);

	let boxOut = (e) => {
		box.classList.remove('box-end-frame');
		box.classList.add('fadeOutAnimation');
		box.classList.remove('fadeInAnimation')
	}

	box.addEventListener('mouseout', boxOut);






});