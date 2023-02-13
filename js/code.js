let gt = document.querySelector('.groups__text')
let g = document.querySelector('.groups')

let listGroups = document.querySelector('.list__with_group')

gt.addEventListener('click', () => {
	showMagic();
})

let showMagic = () => {
	if (g.style.height == 60 + 'px') {
		g.style.height = 600 + 'px'
	} else {
		g.style.height = 60 + 'px'
	}
	// if (g.style.width == 600 + 'px') {
	// 	g.style.width = 'auto'
	// } else {
	// 	g.style.width = 600 + 'px'
	// }
	// if (listGroups.style.display == 'none') {
	// 	listGroups.style.display = 'block'
	// } else {
	// 	listGroups.style.display = 'none'
	// }
}

document.addEventListener("DOMContentLoaded", function () {
	
	let btns = document.querySelectorAll(".btn.effect01, .btn2.effect02, .btn3.effect03, .btn4.effect04");
	for (let i = 0; i < btns.length; i++) {

	  btns[i].addEventListener("click", function() {
		  let tableWrapper = document.querySelector(".table__wrapper");
		  let tableContainer = document.querySelector('.table__container');
		  tableWrapper.style.display = "block";

		  if (tableContainer.style.transform == 'translateY(-105%)') {
			  tableContainer.style.transform = 'translate(0)'
			  tableContainer.style.transition = '3s'
		  }
	  });
	}
});
 
const openSRS = () => {
	
	let closeContent = document.querySelector('.content');

	if (closeContent.style.display == 'none') {
		closeContent.style.display = 'block'
	}
}