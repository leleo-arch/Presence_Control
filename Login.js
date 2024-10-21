// Função de validação de login
function validarLogin(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Exemplo de validação básica (pode ser substituída por um backend)
    if (email === "teste@teste.com" && password === "123456") {
        alert("Login realizado com sucesso!");
        window.location.href = "home.html"; // Exemplo de redirecionamento
    } else {
        alert("Email ou senha inválidos!");
    }
}

// Funções para abrir e fechar modal de recuperação de senha
function abrirModalRecuperacao() {
    document.getElementById("modalRecuperacao").style.display = "flex";
}

function fecharModalRecuperacao() {
    document.getElementById("modalRecuperacao").style.display = "none";
}

// Função de recuperação de senha
function recuperarSenha(event) {
    event.preventDefault();
    const emailRecuperacao = document.getElementById('emailRecuperacao').value;
    
    alert(`Um email de recuperação foi enviado para: ${emailRecuperacao}`);
    fecharModalRecuperacao();
}

// Funções para abrir e fechar modal de cadastro
function abrirModalCadastro() {
    document.getElementById("modalCadastro").style.display = "flex";
}

function fecharModalCadastro() {
    document.getElementById("modalCadastro").style.display = "none";
}

// Função de validação de cadastro
function validarCadastro(event) {
    event.preventDefault();
    const nomeCadastro = document.getElementById('nomeCadastro').value;
    const emailCadastro = document.getElementById('emailCadastro').value;
    const passwordCadastro = document.getElementById('passwordCadastro').value;

    alert(`Cadastro realizado com sucesso! Nome: ${nomeCadastro}, Email: ${emailCadastro}`);
    fecharModalCadastro();
}
