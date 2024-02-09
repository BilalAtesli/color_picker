const btnSave = document.querySelector("#save");

btnSave.addEventListener("click", () => {
  const inputElement = document.querySelector("#color");
  localStorage.setItem("colorcode", inputElement.value);
});

const btnShow = document.querySelector("#show");
btnShow.addEventListener("click", () => {
  document.body.style.backgroundColor = localStorage.getItem("colorcode");
});
