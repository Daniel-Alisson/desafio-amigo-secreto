let amigos = [];

function adicionarAmigos() {
  let nome_amigo = document.querySelector("input").value;
  if (nome_amigo == "") {
    alert("Por favor, insira um nome.");
  } else {
    amigos.push(nome_amigo);
    document.querySelector("input").value = "";
    atualizarLista();
    console.log(amigos);
  }
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}
