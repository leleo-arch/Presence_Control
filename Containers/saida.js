function iniciarCronometro() {
    var cronometros = document.querySelectorAll('.cronometro');

    cronometros.forEach(function(cronometro) {
        var segundos = 0;

        function atualizarCronometro() {
            segundos++;
            var horas = Math.floor(segundos / 3600);
            var minutos = Math.floor((segundos % 3600) / 60);
            var segundosMostrados = segundos % 60;

            // Formatar os números menores que 10 com zero à esquerda
            horas = horas < 10 ? "0" + horas : horas;
            minutos = minutos < 10 ? "0" + minutos : minutos;
            segundosMostrados = segundosMostrados < 10 ? "0" + segundosMostrados : segundosMostrados;

            // Atualizar o texto do cronômetro
            cronometro.textContent = horas + ":" + minutos + ":" + segundosMostrados;
        }

        // Iniciar o cronômetro a cada segundo
        setInterval(atualizarCronometro, 1000);
    });
}

// Chamar a função para iniciar o cronômetro ao carregar a página
iniciarCronometro();
