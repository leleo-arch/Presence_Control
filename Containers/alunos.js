// Função para carregar alunos do localStorage ao iniciar a página
function carregarAlunos() {
    const alunosLista = document.getElementById('alunosLista');
    const alunosData = JSON.parse(localStorage.getItem('alunos') || '[]');

    alunosData.forEach(aluno => {
        const alunoDiv = document.createElement('div');
        alunoDiv.className = 'aluno';
        alunoDiv.innerHTML = `
            <span class="aluno-nome">${aluno.nome.toUpperCase()}</span>
            <div class="presenca-container">
                <span class="presenca presente ${aluno.presente ? 'active' : ''}" data-status="presente" onclick="registrarPresenca(this)">Presente</span>
                <span class="presenca ausente ${aluno.ausente ? 'active' : ''}" data-status="ausente" onclick="registrarAusencia(this)">Ausente</span>
            </div>
            <div class="contador">Presenças: ${aluno.presencas} | Ausências: ${aluno.ausencias}</div>
            <button class="excluir-aluno" onclick="excluirAluno(this)">Excluir</button>
        `;
        alunosLista.appendChild(alunoDiv);
    });
}

// Função para salvar alunos no localStorage
function salvarAlunos() {
    const alunos = [];
    document.querySelectorAll('.aluno').forEach(alunoDiv => {
        const nome = alunoDiv.querySelector('.aluno-nome').innerText;
        const presencas = parseInt(alunoDiv.querySelector('.contador').innerText.match(/\d+/g)[0]);
        const ausencias = parseInt(alunoDiv.querySelector('.contador').innerText.match(/\d+/g)[1]);
        const presente = alunoDiv.querySelector('.presente').classList.contains('active');
        const ausente = alunoDiv.querySelector('.ausente').classList.contains('active');

        alunos.push({ nome, presencas, ausencias, presente, ausente });
    });

    localStorage.setItem('alunos', JSON.stringify(alunos));
}

// Função para adicionar um novo aluno
function adicionarAluno(event) {
    event.preventDefault();
    const alunosLista = document.getElementById('alunosLista');
    const alunoNome = document.getElementById('nomeAluno').value.trim();

    if (!alunoNome) return;

    const alunoDiv = document.createElement('div');
    alunoDiv.className = 'aluno';
    alunoDiv.innerHTML = `
        <span class="aluno-nome">${alunoNome.toUpperCase()}</span>
        <div class="presenca-container">
            <span class="presenca presente" data-status="presente" onclick="registrarPresenca(this)">Presente</span>
            <span class="presenca ausente" data-status="ausente" onclick="registrarAusencia(this)">Ausente</span>
        </div>
        <div class="contador">Presenças: 0 | Ausências: 0</div>
        <button class="excluir-aluno" onclick="excluirAluno(this)">Excluir</button>
    `;

    alunosLista.appendChild(alunoDiv);

    // Salva o novo aluno no localStorage
    salvarAlunos();
    document.getElementById('cadastroAlunoForm').reset();
}

// Função para excluir um aluno
function excluirAluno(button) {
    const alunoDiv = button.closest('.aluno');
    alunoDiv.remove();  // Remove o aluno da lista na tela

    salvarAlunos();  // Atualiza o localStorage após a exclusão
}

// Função para registrar presença
function registrarPresenca(element) {
    const contador = element.closest('.aluno').querySelector('.contador');
    const ausenteButton = element.closest('.aluno').querySelector('.ausente');
    let [presencas, ausencias] = contador.innerText.match(/\d+/g).map(Number);

    if (element.classList.contains('active')) {
        presencas--;
        element.classList.remove('active');
    } else {
        presencas++;
        element.classList.add('active');
        ausenteButton.classList.remove('active');
        ausencias = Math.max(0, ausencias - 1);
    }

    contador.innerText = `Presenças: ${presencas} | Ausências: ${ausencias}`;
    salvarAlunos();
}

// Função para registrar ausência
function registrarAusencia(element) {
    const contador = element.closest('.aluno').querySelector('.contador');
    const presenteButton = element.closest('.aluno').querySelector('.presente');
    let [presencas, ausencias] = contador.innerText.match(/\d+/g).map(Number);

    if (element.classList.contains('active')) {
        ausencias--;
        element.classList.remove('active');
    } else {
        ausencias++;
        element.classList.add('active');
        presenteButton.classList.remove('active');
        presencas = Math.max(0, presencas - 1);
    }

    contador.innerText = `Presenças: ${presencas} | Ausências: ${ausencias}`;
    salvarAlunos();
}

// Carrega os alunos do localStorage ao abrir a página
window.onload = carregarAlunos;
