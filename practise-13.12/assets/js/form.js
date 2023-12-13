const form = document.querySelector("form");
const allInputs = document.querySelectorAll(".form-control");
const BASE_URL = `   http://localhost:8080/users`;
const id = new URLSearchParams(window.location.search).get("id");

async function fillForm() {
  const res = await axios(`${BASE_URL}/${id}`);
  console.log(res.data);
  allInputs[0].value = res.data.id;
  allInputs[1].value = res.data.name;
  allInputs[2].value = res.data.surname;
  allInputs[3].value = res.data.email;
}
if (id) {
  fillForm();
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let supplier = {
    id: allInputs[0].value,
    name: allInputs[1].value,
    surname: allInputs[2].value,
    email: allInputs[3].value,
  };
  if (!id) {
    axios.post(`${BASE_URL}`);
  } else {
    axios.patch(`${BASE_URL}/${id}`);
  }
  allInputs.forEach((item) => (item.value = ""));
});
