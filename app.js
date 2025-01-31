let amigos = [];

function adicionarAmigos() {
  let nome_amigo = document.querySelector("input").value;
  if (nome_amigo == "") {
    alert("Por favor, insira um nome.");
  } else {
    amigos.push(nome_amigo);
    document.querySelector("input").value = "";
    console.log(amigos);
  }
}
