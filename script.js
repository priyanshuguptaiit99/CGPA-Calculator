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
    { id: "sub6", credits: 4 },
    { id: "sub7", credits: 1 },
    { id: "sub8", credits: 1 },
    { id: "sub9", credits: 1 },
    { id: "sub10", credits: 1 }
];

document
    .getElementById("calculateBtn")
    .addEventListener("click", calculateSGPA);

function calculateSGPA() {
    let totalCredits = 0;
    let totalPoints = 0;

    for (const subject of subjects) {
        const grade = document.getElementById(subject.id).value;

        if (!grade) {
            alert("Please select grades for all subjects.");
            return;
        }

        totalCredits += subject.credits;
        totalPoints += gradeMap[grade] * subject.credits;
    }

    const sgpa = (totalPoints / totalCredits).toFixed(2);

    document.getElementById("sgpaResult").textContent = sgpa;
}