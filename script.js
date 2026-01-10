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
        { id: "sub3", credits: 4 },
        { id: "sub4", credits: 2 },
        { id: "sub5", credits: 3 },
        { id: "sub6", credits: 1 },
        { id: "sub7", credits: 2 },
        { id: "sub8", credits: 1 },
        { id: "sub9", credits: 1 } // extra subject
    ];

    let totalCredits = 0;
    let totalPoints = 0;

    for (let sub of subjects) {
        const grade = document.getElementById(sub.id).value;
        if (grade === "") continue; // optional selection

        totalCredits += sub.credits;
        totalPoints += gradeMap[grade] * sub.credits;
    }

    if (totalCredits === 0) {
        alert("Please select at least one subject grade");
        return;
    }

    const sgpa = totalPoints / totalCredits;
    document.getElementById("sgpaResult").innerText = sgpa.toFixed(2);
});
