const groupSelect = document.getElementById('group-select');
const tableBody = document.getElementById('table__body');

groupSelect.addEventListener('change', function() {
  const group = groupSelect.value;

  // Очистить таблицу перед добавлением новых данных
  tableBody.innerHTML = '';

  // Выбрать данные для выбранной группы
  let groupData;
  if (group === 'group1') {
    groupData = group1Data;
  } else if (group === 'group2') {
    groupData = group2Data;
  } else if (group === 'group3') {
    groupData = group3Data;
  }

  // Добавить строки таблицы с данными для выбранной группы
  for (let i = 0; i < groupData.length; i++) {
    const student = groupData[i];
    const tr = document.createElement('tr');

    const numberTd = document.createElement('td');
    numberTd.textContent = i + 1;
    tr.appendChild(numberTd);

    const nameTd = document.createElement('td');
    nameTd.textContent = student.name;
    tr.appendChild(nameTd);

    const lectureScoreInput = createInput('lecture-score-' + i, student.lectureScore);
    tr.appendChild(lectureScoreInput);

    const practiceScoreInput = createInput('practice-score-' + i, student.practiceScore);
    tr.appendChild(practiceScoreInput);

    const midTermExamInput = createInput('mid-term-exam-' + i, student.midTermExam);
    tr.appendChild(midTermExamInput);

    const finalExamInput = createInput('final-exam-' + i, student.finalExam);
    tr.appendChild(finalExamInput);

    const absenceInput = createInput('absence-' + i, student.absence);
    tr.appendChild(absenceInput);

    const totalScoreTd = document.createElement('td');
    totalScoreTd.textContent = student.totalScore;
    tr.appendChild(totalScoreTd);

    tableBody.appendChild(tr);
  }
});

function createInput(name, value) {
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', name);
  input.setAttribute('value',value);

  return input;
  }
