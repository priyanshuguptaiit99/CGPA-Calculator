document.getElementById("calculateBtn").addEventListener("click", () => {

  const gradeMap = {
    S: 10,
    A: 9,
    B: 8,
    C: 7,
    D: 6,
    E: 5
  };

  const subjects = [
    { id: "sub1", credits: 4 },
    { id: "sub2", credits: 4 },
    { id: "sub3", credits: 3 },
    { id: "sub4", credits: 3 },
    { id: "sub5", credits: 2 },
    { id: "sub6", credits: 2 },
    { id: "sub7", credits: 1 },
    { id: "sub8", credits: 1 },
    { id: "sub9", credits: 1 }
  ];

  let totalCredits = 0;
  let totalPoints = 0;

  subjects.forEach(sub => {
    const grade = document.getElementById(sub.id).value;
    if (!grade) return;

    totalCredits += sub.credits;
    totalPoints += gradeMap[grade] * sub.credits;
  });

  if (totalCredits === 0) {
    alert("Please select at least one grade");
    return;
  }

  const sgpa = (totalPoints / totalCredits).toFixed(2);
  document.getElementById("sgpaResult").innerText = sgpa;
});
