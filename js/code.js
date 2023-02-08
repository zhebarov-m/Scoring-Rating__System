let gt = document.querySelector('.groups__text')
let g = document.querySelector('.groups')

let listGroups = document.querySelector('.list__with_group')

gt.addEventListener('click', () => {
	showMagic();
})

let showMagic = () => {
	if (g.style.height == 60 + 'px') {
		g.style.height = 500 + 'px'
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