function saveData() {
	let inputs = document.querySelectorAll(".input");
	for (let i = 0; i < inputs.length; i++) {
	  localStorage.setItem(inputs[i].name, inputs[i].value);
	}
 }
 
 window.onload = function() {
	let inputs = document.querySelectorAll(".input");
	for (let i = 0; i < inputs.length; i++) {
	  if (localStorage.getItem(inputs[i].name)) {
		  inputs[i].value = (localStorage.getItem(inputs[i].name));
		//   ((inputs[i].value/ 280) * 100).toFixed(0)
	  }
	}
 };

 document.addEventListener("DOMContentLoaded", function() {
	 let crossLogo = document.querySelector(".cross__logo");
	 let crossPole = document.querySelector(".table__wrapper");
	crossLogo.addEventListener("click", function() {
	  let tableWrapper = document.querySelector(".table__wrapper");
	  tableWrapper.style.display = "none";
	});
	// crossPole.addEventListener("click", function() {
	// 	let tableWrapper = document.querySelector(".table__wrapper");
	// 	tableWrapper.style.display = "none";
	//  });
 });
 

function convertData() {
	let rows = document.querySelectorAll('table.iksweb tbody tr');

	for (let i = 1; i < rows.length; i++) {
		let cells = rows[i].querySelectorAll('td input');
		if (!cells.length) {
			continue;
		}
		for (let j = 0; j < cells.length; j++) {
			cells[j].addEventListener('input', updateTotalScore);
		}
	}
	 
	function updateTotalScore() {
		let parentRow = this.parentNode.parentNode;
		let cells = parentRow.querySelectorAll('td input');
		let lecturesScore = parseInt(cells[0].value) || 0;
		let practiceScore = parseInt(cells[1].value) || 0;
		let midtermScore = parseInt(cells[2].value) || 0;
		let examScore = parseInt(cells[3].value) || 0;
		let attendanceScore = parseInt(cells[5].value) || 0;
		let totalScore = lecturesScore + practiceScore + midtermScore + examScore + attendanceScore;
		cells[6].value = (totalScore = totalScore / 3 / 80 * 100).toFixed(0);
		if (totalScore.toFixed(0) >= 70) {
			cells[6].style.color = "#339933";
		} else {
			cells[6].style.color = "";
		}
	}
}
window.addEventListener('load', convertData);

