let electronics = document.querySelector(".elec");
let jewelery = document.querySelector(".jewelery");
let menClothing = document.querySelector(".mencloth");
let womenClothing = document.querySelector(".womencloth");
let cards = document.querySelector(".cards");

const BASE_URL = `https://fakestoreapi.com/products`;

async function getData(endpoint) {
  try {
    const response = await axios(`${BASE_URL}/${endpoint}`);
    drawCards(response.data)
  } catch (error) {
    console.log(error);
  }
}
getData("");

function drawCards(array) {
  cards.innerHTML = "";
array.forEach(element => {
    cards.innerHTML += `<div class="cards d-flex flex-wrap">
    <div class="card" style="width:12rem;">
        <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${element.title}</p>
          <p class="card-text">${element.price}</p>
          <p class="card-text"> ${element.category}</p>
          <a href="details.html?id=${element.id}" class="btn btn-primary">Details</a>
        </div>
      </div>
    `;
});

}

electronics.addEventListener("click", function(){
    getData("category/electronics")
})
jewelery.addEventListener("click", function(){
    getData("category/jewelery")
})
menClothing.addEventListener("click", function(){
    getData("category/men's%20clothing")
})
womenClothing.addEventListener("click", function(){
    getData("category/women's%20clothing")
})