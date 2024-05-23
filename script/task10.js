const bodyElements = {
  input: document.querySelector("#controls>input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  box: document.querySelector("#boxes")
}

const elements = [];

bodyElements.createBtn.addEventListener("click", onCreateBtnClick);
bodyElements.destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  const amount = bodyElements.input.value; 

  if (amount < 1 || amount > 100) return alert("Число має бути не менше 1 і не більше 100");
  onDestroyBtnClick();
  const dives = createBoxes(amount);
  bodyElements.box.prepend(...dives);
}

 
function createBoxes(amount) {
  const divArr = [];
  let size = 30;

  for (let i = 1; i < amount; i++) {
      const elem = document.createElement("div");
      elem.style.backgroundColor = getRandomHexColor();
      elem.style.width = `${size}px`;
      elem.style.height = `${size}px`;
      divArr.push(elem);
      size += 10;
  };
  return divArr;
}

function onDestroyBtnClick() {
  bodyElements.box.innerHTML = "";
  bodyElements.input.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}