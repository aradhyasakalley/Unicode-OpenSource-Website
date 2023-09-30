document.addEventListener("DOMContentLoaded", function () {
    // Load data from data.json and display student cards
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const studentContainer = document.querySelector(".student-container");
            data.students.forEach(student => {
                const studentCard = createStudentCard(student);
                studentContainer.appendChild(studentCard);
            });
        })
        .catch(error => console.error("Error loading data:", error));
});

function createStudentCard(student) {
    const card = document.createElement("div");
    card.classList.add("student-card");

    const nameElement = document.createElement("h2");
    nameElement.textContent = student.name;

    const sapidElement = document.createElement("p");
    sapidElement.textContent = `SAP ID: ${student.sapid}`;

    const genderElement = document.createElement("p");
    genderElement.textContent = `Gender: ${student.gender}`;

    const branchElement = document.createElement("p");
    branchElement.textContent = `Branch: ${student.branch}`;

    card.appendChild(nameElement);
    card.appendChild(sapidElement);
    card.appendChild(genderElement);
    card.appendChild(branchElement);

    return card;
}
