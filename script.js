const _options = document.querySelector(".list-options");

let data;

async function fetchData() {
  const APIUrl = "Data.json";
  const result = await fetch(APIUrl);
  data = await result.json();
  console.log(data);
  loadList();
}

// load List
function loadList() {
  showQuestion(data.results);
}

document.addEventListener("DOMContentLoaded", function () {
  /*1*/ fetchData();
});

// display question and options
function showQuestion(data) {
  _options.innerHTML = `
        ${data
          .map(
            (option, index) => `
            <li> ${index + 1}. <span>${option}</span> </li>
        `
          )
          .join("")}
    `;
  selectOption();
}