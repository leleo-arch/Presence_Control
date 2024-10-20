// Array de mensagens
var mensagens = [
    "Como vai seu dia? Espero que esteja maravilhoso assim como você!",
    "Obrigado por dedicar seu tempo à educação!",
    "Sua dedicação é inspiradora!",
    "Que suas aulas sejam sempre cheias de aprendizado e alegria!"
];

// Função para exibir uma mensagem aleatória
function exibirMensagem() {
    var indice = Math.floor(Math.random() * mensagens.length);
    document.getElementById("mensagem").innerText = mensagens[indice];
}
