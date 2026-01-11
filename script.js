document.getElementById("calculateBtn").addEventListener("click", () => {

    // Grade to point mapping (NIT standard)
    const gradeMap = {
        S: 10,
        A: 9,
        B: 8,
        C: 7,
        D: 6,
        E: 5
    };

    // ✅ CORRECT SUBJECT CREDITS
    const subjects = [
        { id: "sub1", credits: 4 }, // Maths-II
        { id: "sub2", credits: 4 }, // DCLD
        { id: "sub3", credits: 3 }, // EEEE
        { id: "sub4", credits: 3 }, // MPP
        { id: "sub5", credits: 2 }, // Python
        { id: "sub6", credits: 2 }, // Workshop
        { id: "sub7", credits: 1 }, // Python Lab
        { id: "sub8", credits: 1 }, // EEEE Lab
        { id: "sub9", credits: 1 }  // Foundation Elective
    ];

    let totalCredits = 0;
    let totalPoints = 0;

    for (let sub of subjects) {
        const grade = document.getElementById(sub.id).value;

        if (!grade) continue; // allow optional selection

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
