
	
//  document.addEventListener("DOMContentLoaded", function() {

// 	const inputField = document.querySelector("input[name='field6']");
// 	const numAbsences = Number(inputField.value);
// 	const attendanceScore = calculateAttendanceScore(numAbsences);
// 	document.querySelector("input[name='field7']").value = attendanceScore;
	
// 	function calculateAttendanceScore(numAbsences) {
		
// 		if (numAbsences === 0) {
// 		  return 15;
// 		} else if (numAbsences <= 2) {
// 		  return 12;
// 		} else if (numAbsences <= 4) {
// 		  return 9;
// 		} else if (numAbsences <= 6) {
// 		  return 6;
// 		} else if (numAbsences <= 8) {
// 		  return 3;
// 		} else {
// 		  return 0;
// 		}
// 	 }
	
// 	 inputField.addEventListener("change", function() {
// 		const numAbsences = Number(inputField.value);
// 		const attendanceScore = calculateAttendanceScore(numAbsences);
// 		document.querySelector("input[name='field7']").value = attendanceScore;
// 	 });
//  });

var data = [
	{
	name: 'Алави Лайла Мусаевна',
	lectureScore: 2,
	practiceScore: 0,
	midTermExam: 0,
	finalExam: 0,
	absence: 2,
	attendanceScore: 0,
	totalScore: 0
	},
	
	{
		name: 'Атабаев Магомед Мусаевич',
		lectureScore: 5,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Ахмадов Рахман Саламбекович',
		lectureScore: 3,
		practiceScore: 6,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Байтезиев Лечи Хасмагомедович',
		lectureScore: 3,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Баматхаджиев Мухаммад Асланбекович',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Горсаев Умар Зелимханович',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Ибрагимов Ислам Арсенович ',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Ильясов Умар Гапурович',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Ишкарнаев Дени Заурбекович',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Катаев Идрис Эдилбекович',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Лутушев Билал Адамович',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Магомадов Абубакар Сайлхусейнович',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Магомадова Марьям Алановна',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Мамаков Усман Умарович',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Резикова Риссалия Асланбековна',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Тагаев Сайл-Ахмед Насрудинович',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Усманов Магомед-Эми Бесланович',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Хаджимурадов Магомед Исаевич',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Хатуев Хамзат Мовсарович',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Хозхаджиев Абдурахман Шамханович',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Цамаева Ясмина Арсановна',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Эльмурзаев Муслим Висханович',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
	{
		name: 'Ибрагимова Сибилла Алиевна',
		lectureScore: 0,
		practiceScore: 0,
		midTermExam: 0,
		finalExam: 0,
		absence: 0,
		attendanceScore: 0,
		totalScore: 0
	},
];
document.addEventListener("DOMContentLoaded", function () {
	// Get the table body
	const tableBody = document.getElementById('table__body');
 
	// Loop through the data array
	data.forEach((student, index) => {
	  // Get the input elements for the current student
	  const lectureScore = tableBody.querySelector(`[name="field${index * 7 + 2}"]`);
	  const practiceScore = tableBody.querySelector(`[name="field${index * 7 + 3}"]`);
	  const midTermExam = tableBody.querySelector(`[name="field${index * 7 + 4}"]`);
	  const finalExam = tableBody.querySelector(`[name="field${index * 7 + 5}"]`);
	  const absence = tableBody.querySelector(`[name="field${index * 7 + 6}"]`);
	  const attendanceScore = tableBody.querySelector(`[name="field${index * 7 + 7}"]`);
	  const totalScore = tableBody.querySelector(`[name="field${index * 7 + 8}"]`);
 
	  // Set the value of the input elements to the corresponding values from the data array
	  lectureScore.value = student.lectureScore;
	  practiceScore.value = student.practiceScore;
	  midTermExam.value = student.midTermExam;
	  finalExam.value = student.finalExam;
	  absence.value = student.absence;
	  attendanceScore.value = student.attendanceScore;
	  totalScore.value = student.totalScore;
	});
 });
 
 
// Get the table body
const tableBody = document.getElementById('table__body');




document.addEventListener("DOMContentLoaded", () => {
	const field6Inputs = document.getElementsByName("field6");
	const field7Inputs = document.getElementsByName("field7");
 
	const totalScoreClasses = 80;
	const maxMissedClassesScore = 15;
 
	for (let i = 0; i < field6Inputs.length; i++) {
	  const field6Input = field6Inputs[i];
	  const field7Input = field7Inputs[i];
 
	  field6Input.addEventListener("input", (event) => {
		 const missedClasses = parseInt(event.target.value);
 
		 if (!isNaN(missedClasses)) {
			const missedClassesPercent = (missedClasses / totalScoreClasses) * 100 * 3.5;
			let missedClassesScore = (100 - missedClassesPercent) / 100 * maxMissedClassesScore;
			missedClassesScore = Math.max(missedClassesScore, 0); // ensure missedClassesScore is not negative
			field7Input.value = missedClassesScore.toFixed(0);
		 }
	  });
	}
 });
 
 
 