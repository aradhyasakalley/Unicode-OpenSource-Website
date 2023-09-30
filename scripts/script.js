document.addEventListener("DOMContentLoaded", function () {
    // Load data from data.json and display student cards
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const studentList = document.querySelector(".student-list");
            data.students.forEach(student => {
                const studentListItem = createStudentListItem(student);
                studentList.appendChild(studentListItem);
            });
        })
        .catch(error => console.error("Error loading data:", error));
});

function createStudentListItem(student) {
    const listItem = document.createElement("li");
    listItem.classList.add("student-card");

    const nameElement = document.createElement("h2");
    nameElement.textContent = student.name;

    const sapidElement = document.createElement("p");
    sapidElement.textContent = `SAP ID: ${student.sapid}`;

    const genderElement = document.createElement("p");
    genderElement.textContent = `Gender: ${student.gender}`;

    const branchElement = document.createElement("p");
    branchElement.textContent = `Branch: ${student.branch}`;

    listItem.appendChild(nameElement);
    listItem.appendChild(sapidElement);
    listItem.appendChild(genderElement);
    listItem.appendChild(branchElement);

    return listItem;
}
