let nome = document.querySelector(".nmNome");
let email = document.querySelector(".nmEmail");
let submit = document.querySelector(".btnCadastrar");

const validar = () => {
  if (nome.value == "") {
    alert("Preencha o campo nome");
    return false;
  }
  if (email.value == "" || email.value.indexOf("@") == -1) {
    alert("Preencha o campo email");
    return false;
  }
  let arrName = nome.value.split(" ");
  return alert("Cadastro realizado com sucesso" + " " + arrName[0]);
};
