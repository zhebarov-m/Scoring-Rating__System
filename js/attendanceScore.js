const inputField = document.querySelector("input[name='field6']");
const numAbsences = Number(inputField.value);
const attendanceScore = calculateAttendanceScore(numAbsences);
document.querySelector("input[name='field7']").value = attendanceScore;

function calculateAttendanceScore(numAbsences) {
	
	if (numAbsences === 0) {
	  return 15;
	} else if (numAbsences <= 2) {
	  return 12;
	} else if (numAbsences <= 4) {
	  return 9;
	} else if (numAbsences <= 6) {
	  return 6;
	} else if (numAbsences <= 8) {
	  return 3;
	} else {
	  return 0;
	}
 }

 inputField.addEventListener("change", function() {
	const numAbsences = Number(inputField.value);
	const attendanceScore = calculateAttendanceScore(numAbsences);
	document.querySelector("input[name='field7']").value = attendanceScore;
	});