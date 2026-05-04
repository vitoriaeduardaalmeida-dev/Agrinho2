let total = 0;

// adiciona ação
function add() {
  total++;
  atualizar();
}

// reseta
function reset() {
  total = 0;
  atualizar();
}

// atualiza tudo
function atualizar() {
  document.getElementById("contador").innerText = total;

  let porcentagem = total * 10;
  if (porcentagem > 100) porcentagem = 100;

  document.getElementById("barra").style.width = porcentagem + "%";

  let nivel = "Inicial";
  if (total > 3) nivel = "Intermediário";
  if (total > 7) nivel = "Avançado";

  document.getElementById("nivel").innerText = "Nível: " + nivel;
}

// mensagem personalizada
function mensagem() {
  let nome = document.getElementById("nome").value;

  if (nome === "") {
    document.getElementById("resposta").innerText = "Digite seu nome!";
  } else {
    document.getElementById("resposta").innerText =
      nome + ", você está ajudando o planeta 🌍";
  }
}

// modo escuro
document.getElementById("temaBtn").onclick = function () {
  document.body.classList.toggle("dark");
};
