let cards = document.querySelector(".cards");
let users = JSON.parse(localStorage.getItem("users"));
function drawCards(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `<div class="card" style="width: 18rem">
        <img src="${element.userphoto}"alt="" >
        <div class="card-body">
          <h5 class="card-name">${element.name} ${element.surname}</h5>
          <p class="card-email">${element.email}</p>
          <p class="card-date">${element.date}</p>
          <button class="btn btn-primary" onclick=deleteUser(${element.id},this)>Remove Fav</button>
          <a href="#" class="btn btn-danger" onclick=goBack()>Go Back</a>
        </div>
        </div>
        `;
  });
}
drawCards(users);
function deleteUser(id, btn) {
  if (confirm("If you are sure to delete from favorite??")) {
    let filter = users.filter((item) => item.id != id);
    btn.closest(".card").remove();
    localStorage.setItem("users", JSON.stringify(filter));
  }
}

function goBack() {
  window.history.back();
}