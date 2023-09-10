const addBtn = document.querySelector(".add");

const inputGroup = document.querySelector(".input-group");

function addInput() {
  const name = document.createElement("input");
  name.type = "text";
  name.className = "name";
  name.placeholder = "Nome";

  const rg = document.createElement("input");
  rg.type = "text";
  rg.className = "rg"
  rg.placeholder = "RG";

  const deleteBtn = document.createElement("a");
  deleteBtn.className = "deleteBtn";
  deleteBtn.innerHTML = "Excluir";

  deleteBtn.addEventListener("click", removeInput);

  const divFlex = document.createElement("div");
  divFlex.className = "input-wrapper";

  divFlex.appendChild(name);
  divFlex.appendChild(rg);
  divFlex.appendChild(deleteBtn);
  if(inputGroup.children.length < 3) {
    inputGroup.appendChild(divFlex);
  }
}

addBtn.addEventListener("click", addInput);

function removeInput() {
  this.parentElement.remove();
}