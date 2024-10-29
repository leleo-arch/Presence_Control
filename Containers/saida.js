// Função para carregar alunos do localStorage ao iniciar a página
function carregarAlunos() {
    const alunosLista = document.getElementById('alunosLista');
    const alunosData = JSON.parse(localStorage.getItem('alunos') || '[]');

    alunosData.forEach(aluno => {
        adicionarAlunoDOM(aluno.nome, aluno.tempo);
    });
}

// Função para salvar alunos no localStorage
function salvarAlunos() {
    const alunos = [];
    document.querySelectorAll('.aluno').forEach(alunoDiv => {
        const nome = alunoDiv.querySelector('.aluno-nome').innerText;
        const tempo = alunoDiv.querySelector('.contador').innerText.replace('Tempo: ', '');
        alunos.push({ nome, tempo });
    });

    localStorage.setItem('alunos', JSON.stringify(alunos));
}

// Função para adicionar um novo aluno
function adicionarAluno(event) {
    event.preventDefault();
    const alunoNome = document.getElementById('nomeAluno').value.trim();

    if (!alunoNome) return;

    adicionarAlunoDOM(alunoNome, '0:00');
    salvarAlunos();
    document.getElementById('cadastroAlunoForm').reset();
}

// Função para adicionar aluno ao DOM
function adicionarAlunoDOM(nome, tempo) {
    const alunosLista = document.getElementById('alunosLista');

    const alunoDiv = document.createElement('div');
    alunoDiv.className = 'aluno';
    alunoDiv.innerHTML = `
        <span class="aluno-nome">${nome.toUpperCase()}</span>
        <div class="contador">Tempo: ${tempo}</div>
        <div class="cronometro-container">
            <button onclick="iniciarCronometro(this)">Iniciar/Reiniciar</button>
            <button onclick="pausarCronometro(this)">Pausar</button>
            <button onclick="adicionarTempo(this, 5)">Adicionar 5s</button>
                    <button class="excluir-aluno" onclick="excluirAluno(this)">Excluir</button>

        </div>
        
    `;
    alunosLista.appendChild(alunoDiv);
}

// Função para excluir um aluno
function excluirAluno(button) {
    const alunoDiv = button.closest('.aluno');
    alunoDiv.remove();  // Remove o aluno da lista na tela
    salvarAlunos();  // Atualiza o localStorage após a exclusão
}

// Variáveis para o cronômetro
let intervalos = {};

// Funções para controle do cronômetro
function iniciarCronometro(button) {
    const alunoDiv = button.closest('.aluno');
    const contador = alunoDiv.querySelector('.contador');
    const nomeAluno = alunoDiv.querySelector('.aluno-nome').innerText;
    
    if (!intervalos[nomeAluno]) {
        intervalos[nomeAluno] = { tempo: 0, intervalo: setInterval(() => {
            intervalos[nomeAluno].tempo++;
            contador.innerText = `Tempo: ${formatarTempo(intervalos[nomeAluno].tempo)}`;
            salvarAlunos();
        }, 1000) };
    }
}

function pausarCronometro(button) {
    const alunoDiv = button.closest('.aluno');
    const nomeAluno = alunoDiv.querySelector('.aluno-nome').innerText;

    if (intervalos[nomeAluno]) {
        clearInterval(intervalos[nomeAluno].intervalo);
        delete intervalos[nomeAluno];
    }
}

function adicionarTempo(button, segundos) {
    const alunoDiv = button.closest('.aluno');
    const contador = alunoDiv.querySelector('.contador');
    const nomeAluno = alunoDiv.querySelector('.aluno-nome').innerText;

    if (intervalos[nomeAluno]) {
        intervalos[nomeAluno].tempo += segundos;
        contador.innerText = `Tempo: ${formatarTempo(intervalos[nomeAluno].tempo)}`;
    }
}

function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const secs = segundos % 60;
    return `${minutos}:${secs < 10 ? '0' : ''}${secs}`;
}

// Carrega os alunos do localStorage ao abrir a página
window.onload = carregarAlunos;
