console.log("JavaScript carregado com sucesso!");

window.onload = function() {
    const formulario = document.getElementById("meuFormulario");
    const resposta = document.getElementById("resposta");

    if (formulario) {
        formulario.onsubmit = function(evento) {
            evento.preventDefault(); // Impede a página de recarregar
            
            const nome = document.getElementById("nome").value;
            
            if (resposta) {
                resposta.innerText = "Obrigado pelo contato, " + nome + "! Mensagem enviada.";
                resposta.style.color = "green";
                resposta.style.fontWeight = "bold";
            }
            
            formulario.reset(); // Limpa o formulário
        };
    }
};
