// Função que você criou para alterar o tema
function modoEscuro() {
    document.body.classList.toggle("dark");
}

// Função para processar o formulário de contato
function enviarMensagem(evento) {
    evento.preventDefault(); // Impede a página de recarregar
    
    const nomeInput = document.getElementById("nome");
    const resposta = document.getElementById("resposta");
    
    if (nomeInput && resposta) {
        resposta.innerText = "Obrigado pelo contato, " + nomeInput.value + "! Mensagem enviada.";
        resposta.style.color = "green";
        resposta.style.fontWeight = "bold";
    }
    
    document.getElementById("meuFormulario").reset(); // Limpa os campos
}
