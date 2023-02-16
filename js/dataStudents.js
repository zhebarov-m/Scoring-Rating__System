
// let names = [
//   ["И1.21-21", "X", "X", "X"],
//   ["X", "X", "П2.20-32", "X"],
//   ["И1.19-43", "X", "X", "X"],
// ];

// let buttons = document.querySelectorAll(".buttons");
// let buttons2 = document.querySelectorAll(".buttons2");
// let buttons3 = document.querySelectorAll(".buttons3");
// let buttons4 = document.querySelectorAll(".buttons4");
// let cells = document.querySelectorAll('td')

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function() {
//     // code to load names[i][0] in td
// 	  for (let j = 0; j < cells.length; j++) {
// 		if (cells[i].textContent == 'Лекции') {
// 			cells.innerHTML = names[i][0]
// 		  }
// 	  }
//   });
//   buttons2[i].addEventListener("click", function() {
//     // code to load names[i][1] in td
//   });
//   buttons3[i].addEventListener("click", function() {
//     // code to load names[i][2] in td
//   });
//   buttons4[i].addEventListener("click", function() {
//     // code to load names[i][3] in td
//   });
// }


var data = [
	{
	name: 'Алави Лайла Мусаевна',
	lectures: 0,
	practice: 0,
	midterm: 0,
	exam: 0,
	attendance1: 2,
	attendance2: 0,
	total: 0
	},
	
	{
		name: 'Атабаев Магомед Мусаевич',
		lectures: 5,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Ахмадов Рахман Саламбекович',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Байтезиев Лечи Хасмагомедович',
		lectures: 3,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Баматхаджиев Мухаммад Асланбекович',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Горсаев Умар Зелимханович',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Ибрагимов Ислам Арсенович ',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Ильясов Умар Гапурович',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Ишкарнаев Дени Заурбекович',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Катаев Идрис Эдилбекович',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Лутушев Билал Адамович',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Магомадов Абубакар Сайлхусейнович',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Магомадова Марьям Алановна',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Мамаков Усман Умарович',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Резикова Риссалия Асланбековна',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Тагаев Сайл-Ахмед Насрудинович',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Усманов Магомед-Эми Бесланович',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Хаджимурадов Магомед Исаевич',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Хатуев Хамзат Мовсарович',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Хозхаджиев Абдурахман Шамханович',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Цамаева Ясмина Арсановна',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Эльмурзаев Муслим Висханович',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
	{
		name: 'Ибрагимова Сибилла Алиевна',
		lectures: 0,
		practice: 0,
		midterm: 0,
		exam: 0,
		attendance1: 0,
		attendance2: 0,
		total: 0
	},
];



 
//function populateTable() {

//   var table = document.querySelector('.iksweb #table__body');
//   for (var i = 0; i < data.length; i++) {
//     var row = document.createElement('tr');
//     var numberCell = document.createElement('td');
//     numberCell.textContent = i + 1;
//     row.appendChild(numberCell);

//     var nameCell = document.createElement('td');
//     nameCell.textContent = data[i].name;
//     row.appendChild(nameCell);

//     var lecturesCell = document.createElement('td');
//     var lecturesInput = document.createElement('input');
//     lecturesInput.classList.add('input');
//     lecturesInput.setAttribute('name', 'field' + (i * 7 + 2));
//     lecturesInput.setAttribute('value', data[i].lectures);
//     lecturesInput.setAttribute('type', 'text');
//     lecturesCell.appendChild(lecturesInput);
//     row.appendChild(lecturesCell);

//     var practiceCell = document.createElement('td');
//     var practiceInput = document.createElement('input');
//     practiceInput.classList.add('input');
//     practiceInput.setAttribute('name', 'field' + (i * 7 + 3));
//     practiceInput.setAttribute('value', data[i].practice);
//     practiceInput.setAttribute('type', 'text');
//     practiceCell.appendChild(practiceInput);
//     row.appendChild(practiceCell);

//     var midtermCell = document.createElement('td');
//     var midtermInput = document.createElement('input');
//     midtermInput.classList.add('input');
//     midtermInput.setAttribute('name', 'field' + (i * 7 + 4));
//     midtermInput.setAttribute('value', data[i].midterm);
//     midtermInput.setAttribute('type', 'text');
//     midtermCell.appendChild(midtermInput);
//     row.appendChild(midtermCell);

//     var examCell = document.createElement('td');
// 	 var examInput = document.createElement('input');
// 		examInput.classList.add('input');
// 		examInput.setAttribute('name', 'field' + (i * 7 + 5));
// 		examInput.setAttribute('value', data[i].exam);
// 		examInput.setAttribute('type', 'text');
// 		examCell.appendChild(examInput);
// 	  row.appendChild(examCell);
// 	  var attendance1Cell = document.createElement('td');
// var attendance1Input = document.createElement('input');
// attendance1Input.classList.add('input');
// attendance1Input.setAttribute('name', 'field' + (i * 7 + 6));
// attendance1Input.setAttribute('value', data[i].attendance1);
// attendance1Input.setAttribute('type', 'text');
// attendance1Cell.appendChild(attendance1Input);
// row.appendChild(attendance1Cell);

// var attendance2Cell = document.createElement('td');
// var attendance2Input = document.createElement('input');
// attendance2Input.classList.add('input');
// attendance2Input.setAttribute('name', 'field' + (i * 7 + 7));
// attendance2Input.setAttribute('value', data[i].attendance2);
// attendance2Input.setAttribute('type', 'text');
// attendance2Cell.appendChild(attendance2Input);
// row.appendChild(attendance2Cell);

// var totalCell = document.createElement('td');
// 	  var totalInput = document.createElement('input');
// 	  totalInput.classList.add('input');
// 	  totalInput.setAttribute('name', 'field' + (i * 7 + 8));
// 	  totalInput.setAttribute('type', 'text');
// 	  totalCell.appendChild(totalInput);
// totalInput.value = data[i].total;
// 	  row.appendChild(totalCell);
	

// table.appendChild(row);
// }
// }

// document.addEventListener('DOMContentLoaded', function() {
// populateTable();
// }); -->

