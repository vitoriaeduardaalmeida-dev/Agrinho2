// contador global
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

// atualiza tudo na tela
function atualizar() {

  // contador principal (tem que existir no HTML)
  const contador = document.getElementById("contador");
  if (contador) {
    contador.innerText = total;
  }

  // barra de progresso
  const barra = document.getElementById("barra");
  if (barra) {
    let porcentagem = total * 10;
    if (porcentagem > 100) porcentagem = 100;
    barra.style.width = porcentagem + "%";
  }

  // nível
  const nivel = document.getElementById("nivel");
  if (nivel) {
    let texto = "Inicial";
    if (total > 3) texto = "Intermediário";
    if (total > 7) texto = "Avançado";

    nivel.innerText = "Nível: " + texto;
  }
}

// mensagem personalizada
function mensagem() {
  const nomeInput = document.getElementById("nome");
  const resposta = document.getElementById("resposta");

  if (!nomeInput || !resposta) return;

  if (nomeInput.value === "") {
    resposta.innerText = "Digite seu nome!";
  } else {
    resposta.innerText =
      nomeInput.value + ", você está ajudando o planeta 🌍";
  }
}

// modo escuro (seguro)
window.onload = function () {
  const temaBtn = document.getElementById("temaBtn");

  if (temaBtn) {
    temaBtn.onclick = function () {
      document.body.classList.toggle("dark");
    };
  }
};
