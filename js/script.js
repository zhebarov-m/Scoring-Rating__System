// const group1Data = [
// 	{
// 	  name: 'Иван Иванов',
// 	  lectureScore: 10,
// 	  practiceScore: 20,
// 	  midTermExam: 30,
// 	  finalExam: 40,
// 	  absence: 0,
// 	  totalScore: 0
// 	},
// 	{
// 	  name: 'Петр Петров',
// 	  lectureScore: 15,
// 	  practiceScore: 25,
// 	  midTermExam: 35,
// 	  finalExam: 45,
// 	  absence: 1,
// 	  totalScore: 0
// 	},
// 	{
// 	  name: 'Сергей Сергеев',
// 	  lectureScore: 20,
// 	  practiceScore: 30,
// 	  midTermExam: 40,
// 	  finalExam: 50,
// 	  absence: 2,
// 	  totalScore: 0
// 	}
//  ];
 
//  const group2Data = [
// 	{
// 	  name: 'Анна Иванова',
// 	  lectureScore: 15,
// 	  practiceScore: 20,
// 	  midTermExam: 25,
// 	  finalExam: 35,
// 	  absence: 0,
// 	  totalScore: 0
// 	},
// 	{
// 	  name: 'Елена Петрова',
// 	  lectureScore: 20,
// 	  practiceScore: 25,
// 	  midTermExam: 30,
// 	  finalExam: 40,
// 	  absence: 1,
// 	  totalScore: 0
// 	},
// 	{
// 	  name: 'Ольга Сергеева',
// 	  lectureScore: 25,
// 	  practiceScore: 30,
// 	  midTermExam: 35,
// 	  finalExam: 45,
// 	  absence: 2,
// 	  totalScore: 0
// 	}
//  ];
 
//  const group3Data = [
// 	{
// 	  name: 'Дмитрий Иванов',
// 	  lectureScore: 10,
// 	  practiceScore: 15,
// 	  midTermExam: 20,
// 	  finalExam: 30,
// 	  absence: 0,
// 	  totalScore: 0
// 	},
// 	{
// 	  name: 'Александр Петров',
// 	  lectureScore: 15,
// 	  practiceScore: 20,
// 	  midTermExam: 25,
// 	  finalExam: 35,
// 	  absence: 1,
// 	  totalScore: 0
// 	},
// 	{
// 	  name: 'Михаил Сергеев',
// 	  lectureScore: 20,
// 	  practiceScore: 25,
// 	  midTermExam: 30,
// 	  finalExam: 40,
// 	  absence: 2,
// 	  totalScore: 0
// 	}
//  ];



const group1Btn = document.querySelector('.btn.effect01');
const group2Btn = document.querySelector('.btn2.effect02');
const group3Btn = document.querySelector('.btn3.effect03');
const tableBody = document.getElementById('table__body');

group1Btn.addEventListener('click', function() {
  updateTable(group1Data);
});

group2Btn.addEventListener('click', function() {
  updateTable(group2Data);
});

group3Btn.addEventListener('click', function() {
  updateTable(group3Data);
});

function updateTable(groupData) {
  // Clear the table except the first two rows
  const tableRows = tableBody.getElementsByTagName('tr');
  for (let i = tableRows.length - 1; i >= 3; i--) {
    tableBody.removeChild(tableRows[i]);
  }

  // Add table rows with data for the selected group
  for (let i = 0; i < groupData.length; i++) {
    const student = groupData[i];
    const tr = document.createElement('tr');

    const numberTd = document.createElement('td');
    numberTd.textContent = i + 1;
    tr.appendChild(numberTd);

    const nameTd = document.createElement('td');
    nameTd.textContent = student.name;
    tr.appendChild(nameTd);

    const lectureScoreTd = document.createElement('td');
    const lectureScoreInput = createInput('lecture-score-' + i, student.lectureScore);
    lectureScoreInput.classList.add('input');
    lectureScoreTd.appendChild(lectureScoreInput);
    tr.appendChild(lectureScoreTd);

    const practiceScoreTd = document.createElement('td');
    const practiceScoreInput = createInput('practice-score-' + i, student.practiceScore);
    practiceScoreInput.classList.add('input');
    practiceScoreTd.appendChild(practiceScoreInput);
    tr.appendChild(practiceScoreTd);

    const midTermExamTd = document.createElement('td');
    const midTermExamInput = createInput('mid-term-exam-' + i, student.midTermExam);
    midTermExamInput.classList.add('input');
    midTermExamTd.appendChild(midTermExamInput);
    tr.appendChild(midTermExamTd);

    const finalExamTd = document.createElement('td');
    const finalExamInput = createInput('final-exam-' + i, student.finalExam);
    finalExamInput.classList.add('input');
    finalExamTd.appendChild(finalExamInput);
    tr.appendChild(finalExamTd);

    const absenceTd = document.createElement('td');
    const absenceInput = createInput('absence-' + i, student.absence);
    absenceInput.classList.add('input');
    absenceTd.appendChild(absenceInput);
    tr.appendChild(absenceTd);
	 
	const attendanceScoreTd = document.createElement('td');
    const attendanceScoreInput = createInput('attendance-score-' + i, student.attendanceScore);
    attendanceScoreInput.classList.add('input');
    attendanceScoreTd.appendChild(attendanceScoreInput);
    tr.appendChild(attendanceScoreTd);

	const totalScoreTd = document.createElement('td');
    const totalScoreInput = createInput('total-score-' + i, student.totalScore);
    totalScoreInput.classList.add('input');
    totalScoreTd.appendChild(totalScoreInput);
    tr.appendChild(totalScoreTd);

    tableBody.appendChild(tr);
  }
}

function createInput(name, value) {
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', name);
  input.setAttribute('value', value);

  return input;
}
