function registrarPresenca(element) {
    const alunoDiv = element.parentElement;
    const contador = alunoDiv.querySelector('.contador');
    let [presencas, ausencias] = contador.innerText.match(/\d+/g).map(Number);

    presencas++;
    contador.innerText = `Presenças: ${presencas} | Ausências: ${ausencias}`;
}

function registrarAusencia(element) {
    const alunoDiv = element.parentElement;
    const contador = alunoDiv.querySelector('.contador');
    let [presencas, ausencias] = contador.innerText.match(/\d+/g).map(Number);

    ausencias++;
    contador.innerText = `Presenças: ${presencas} | Ausências: ${ausencias}`;
}
