const table = document.getElementById("table");
const tableConstruct = document.getElementById("table").innerHTML;
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("search");
const select = document.getElementById("select");

function search() {
  table.innerHTML = tableConstruct;
  console.log(
    `https://dummyjson.com/products${searchInput.value !== "" ? `/q=${searchInput.value}&` : "?"}${select.value !== "" ? `sortBy=title&order=${select.value}` : ""}`
  );
  fetch(
    `https://dummyjson.com/products${searchInput.value !== "" ? `/search?q=
${searchInput.value}&` : "?"}${select.value !== "" ? `sortBy=title&order=${select.value}` : ""}`
  )
    .then((res) => res.json())
    .then((data) => {
      const { products } = data;
      products.forEach((product) => {
        const tr = document.createElement("tr");
        const photoTd = document.createElement("td");
        const titleTd = document.createElement("td");
        const descriptionTd = document.createElement("td");
        photoTd.innerHTML = `<img src="${product.images[0]}" alt="${product.title}">`;
        titleTd.innerText = product.title;
        descriptionTd.innerText = product.description;
        tr.appendChild(photoTd);
        tr.appendChild(titleTd);
        tr.appendChild(descriptionTd);
        table.appendChild(tr);
      });
    });
}

window.addEventListener("load", search);
searchBtn.addEventListener("click", search);
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    search();
  }
});
