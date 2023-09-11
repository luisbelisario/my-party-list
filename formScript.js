const addBtn = document.querySelector(".add");

const inputGroup = document.querySelector(".input-group");

function addInput() {
  const name = document.createElement("input");
  name.type = "text";
  name.className = "name";
  name.placeholder = "Nome";
  name.setAttribute("required", "");

  const erroName = document.createElement("span");
  erroName.className = "msg-erro";

  const rg = document.createElement("input");
  rg.type = "text";
  rg.className = "rg"
  rg.placeholder = "RG";
  rg.setAttribute("required", "");

  const erroRG = document.createElement("span");
  erroRG.className = "msg-erro";

  const deleteBtn = document.createElement("a");
  deleteBtn.className = "deleteBtn";
  deleteBtn.innerHTML = "Excluir";

  deleteBtn.addEventListener("click", removeInput);

  const divFlex = document.createElement("div");
  divFlex.className = "input-wrapper";

  divFlex.appendChild(name);
  divFlex.appendChild(rg);
  divFlex.appendChild(deleteBtn);
  if(inputGroup.children.length < 2) {
    inputGroup.appendChild(divFlex);
  }
}

addBtn.addEventListener("click", addInput);

function removeInput() {
  this.parentElement.remove();
}