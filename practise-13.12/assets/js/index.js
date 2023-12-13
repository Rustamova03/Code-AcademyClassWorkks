const tBody = document.querySelector("tbody");
const BASE_URL = `   http://localhost:8080/users`;

async function getData() {
  let response = await axios(`${BASE_URL}`);
  // console.log(response.data);
  drawTable(response.data);
}
getData();

function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
        <td class="id">${element.id}</td>
        <td class="photo"><img src="${element.userphoto}" alt=""></td>
        <td class="name">${element.name}</td>
        <td class="surname">${element.surname}</td>
        <td class="email">${element.email}</td>
        <td class="date">${element.date}</td>
       
        <td><a class="btn btn-success" href="index.html?id=${element.id}">Edit</a>
        <button class="btn btn-danger" onclick=deleteSupplier(${element.id},this)>Delete</button>
        <button class="btn btn-primary" onclick="addToFavBtn(${element.id},this)">Add Fav</button></td>
        </td>
      
        `;
    tBody.append(trElem);
  });
}

async function deleteSupplier(id, btn) {
  if (confirm("are u sure to delete?")) {
    btn.closest("tr").remove();
    await axios.delete(`${BASE_URL}/${id}`);
  }
}

let users = JSON.parse(localStorage.getItem("users")) || [];
async function addToFavBtn(id,btn) {
  
  let res = await axios(`${BASE_URL}/${id}`);
  let result= users.find((item) => item.id === id);
  if (!result) {
    users.push(res.data);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    window.alert("It's already in favorites");
  }
}
