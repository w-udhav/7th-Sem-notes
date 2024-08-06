const BASE_URL = "https://jsonplaceholder.typicode.com";
const container = document.querySelector("#container");

async function getData() {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

function showData() {
  container.innerHTML = "";
  getData().then((data) => {
    console.log(data);
    data.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `<h2>${item.name}</h2><p>${item.email}</p>`;
      container.appendChild(div);
    });
  });
}

document.addEventListener("DOMContentLoaded", showData);
