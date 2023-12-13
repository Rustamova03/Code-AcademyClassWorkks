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
        <td>${element.id}</td>
        <td><img src="${element.userphoto}" alt=""></td>
        <td>${element.name}</td>
        <td>${element.surname}</td>
        <td>${element.email}</td>
        <td>${element.date}</td>
       
        <td><a class="btn btn-success" href="index.html?id=${element.id}">Edit</a>
        <button class="btn btn-danger" onclick=deleteSupplier(${element.id},this)>Delete</button>
        
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
