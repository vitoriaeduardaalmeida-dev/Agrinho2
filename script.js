// contador
let total = 0;

function somar() {
  total++;
  document.getElementById("numero").innerText = total;
}

function resetar() {
  total = 0;
  document.getElementById("numero").innerText = total;
}

// mensagem personalizada
function mostrarMensagem() {
  let nome = document.getElementById("nome").value;

  if (nome === "") {
    document.getElementById("resposta").innerText = "Digite seu nome!";
  } else {
    document.getElementById("resposta").innerText =
      "Olá, " + nome + "! Você faz parte da mudança sustentável.";
  }
}

// modo escuro
document.getElementById("tema").onclick = function () {
  document.body.classList.toggle("dark");
};
