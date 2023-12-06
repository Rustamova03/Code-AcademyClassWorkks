let id = new URL(window.location).searchParams.get("id");
let products = document.querySelector(".products");
let BASE_URL = `https://fakestoreapi.com/products`;

async function getData() {
  const response = await axios(`${BASE_URL}/${id}`);
  products.innerHTML = `
    <div class="col col-12 col-md-6 col-lg-4">
          <div class="card" style="width: 18rem;" >
            <img src="${
              response.data.image
            }" class="card-img-top" alt="..." style=" height:100% ;" />
            <div class="card-body">
              <h5 class="card-text">${response.data.title}</h5>
              <p class="card-text">${response.data.price}$</p>
              <p class="card-text">${response.data.description.slice(
                0,
                100
              )}...</p>
              <button  class="btn btn-primary" onClick='goBack()'>Go Back</button>
            </div>
          </div>
        </div>
    `;
}
getData();

function goBack() {
  window.history.back();
}
