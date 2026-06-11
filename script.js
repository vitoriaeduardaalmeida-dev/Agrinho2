// MODO ESCURO
function modoEscuro() {
    document.body.classList.toggle("dark-mode");
}

// FORMULÁRIO
function enviarMensagem(event) {
    event.preventDefault();

    document.getElementById("resposta").innerHTML =
        "✅ Mensagem enviada com sucesso!";

    document.getElementById("meuFormulario").reset();
}

// ACESSIBILIDADE

let tamanhoFonte = 16;

function ouvirPagina() {

    let texto = document.body.innerText;

    let fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";
    fala.rate = 1;
    fala.pitch = 1;

    speechSynthesis.cancel();
    speechSynthesis.speak(fala);
}

function pausarLeitura() {
    speechSynthesis.pause();
}

function continuarLeitura() {
    speechSynthesis.resume();
}

function pararLeitura() {
    speechSynthesis.cancel();
}

function aumentarFonte() {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte() {

    if (tamanhoFonte > 10) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }

}

function trocarTema() {

    let tema = document.getElementById("tema").value;

    document.body.className = "";

    if (tema === "verde") {
        document.body.classList.add("tema-verde");
    }

    if (tema === "azul") {
        document.body.classList.add("tema-azul");
    }

    if (tema === "roxo") {
        document.body.classList.add("tema-roxo");
    }

    if (tema === "laranja") {
        document.body.classList.add("tema-laranja");
    }

    if (tema === "escuro") {
        document.body.classList.add("tema-escuro");
    }
}
