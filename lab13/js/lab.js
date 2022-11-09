/**
 * Author:    Squantio
 * Created:   09.26.2022
 *
 * (c) Copyright by scrabungus Corp.
 **/

 document.addEventListener('DOMContentLoaded', () => {

//animation 1 - making the text fade into red when hovered upon

  let text = document.querySelector('.hover');

	let textHover = (e) => {
		text.classList.add('text-end-frame', 'fadeInAnimation');
		text.classList.remove('fadeOutAnimation');
	}

	text.addEventListener('mouseover', textHover);

	let textOut = (e) => {
		text.classList.remove('text-end-frame');
		text.classList.add('fadeOutAnimation');
		text.classList.remove('fadeInAnimation')
	}

	text.addEventListener('mouseout', textOut);

 });
