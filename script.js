// Atualiza o valor do tamanho da senha exibido na tela
const slider = document.getElementById("slider");
const valor = document.getElementById("valor");
slider.addEventListener("input", () => {
    valor.textContent = slider.value;
});

// Função para gerar a senha
function gerarSenha() {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@;#$%&*()_=+~^`{}";
    const tamanho = parseInt(slider.value, 10);
    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        senha += charset[randomIndex];
    }

    // Exibe a senha gerada no container
    const passwordContainer = document.getElementById("conatriner-password");
    const passwordElement = document.getElementById("password");
    passwordElement.textContent = senha;
    passwordContainer.classList.add("show");
}

// Copia a senha para a área de transferência ao clicar nela
const passwordElement = document.getElementById("password");
passwordElement.addEventListener("click", () => {
    const senha = passwordElement.textContent;
    navigator.clipboard.writeText(senha).then(() => {
        alert("Senha copiada para a área de transferência!");
    });
});