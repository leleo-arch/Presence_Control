// Função para registrar presença e salvar no localStorage
function registrarPresenca(element) {
    const alunoDiv = element.parentElement;
    const alunoNome = alunoDiv.querySelector('.aluno-nome').innerText;
    const contador = alunoDiv.querySelector('.contador');
    let [presencas, ausencias] = contador.innerText.match(/\d+/g).map(Number);

    presencas++;

    // Atualiza o contador visualmente
    contador.innerText = `Presenças: ${presencas} | Ausências: ${ausencias}`;

    // Salva no localStorage
    salvarNoLocalStorage(alunoNome, presencas, ausencias);
}

// Função para registrar ausência e salvar no localStorage
function registrarAusencia(element) {
    const alunoDiv = element.parentElement;
    const alunoNome = alunoDiv.querySelector('.aluno-nome').innerText;
    const contador = alunoDiv.querySelector('.contador');
    let [presencas, ausencias] = contador.innerText.match(/\d+/g).map(Number);

    ausencias++;

    // Atualiza o contador visualmente
    contador.innerText = `Presenças: ${presencas} | Ausências: ${ausencias}`;

    // Salva no localStorage
    salvarNoLocalStorage(alunoNome, presencas, ausencias);
}

// Função para salvar os dados no localStorage
function salvarNoLocalStorage(alunoNome, presencas, ausencias) {
    const dadosAluno = {
        presencas: presencas,
        ausencias: ausencias
    };
    localStorage.setItem(alunoNome, JSON.stringify(dadosAluno));
}

// Função para carregar os dados do localStorage quando a página é carregada
function carregarDadosAlunos() {
    const alunos = document.querySelectorAll('.aluno');

    alunos.forEach(aluno => {
        const alunoNome = aluno.querySelector('.aluno-nome').innerText;
        const contador = aluno.querySelector('.contador');
        const dadosAluno = JSON.parse(localStorage.getItem(alunoNome));

        if (dadosAluno) {
            contador.innerText = `Presenças: ${dadosAluno.presencas} | Ausências: ${dadosAluno.ausencias}`;
        }
    });
}

// Chama a função de carregar dados ao abrir a página
window.onload = carregarDadosAlunos;
