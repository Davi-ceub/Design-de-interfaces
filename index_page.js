/**
 * Arquivo: index_page.js
 * Descrição: Script para a página HTML corrigida.
 */

// --- 1. SELEÇÃO DOS ELEMENTOS DO DOM ---

// Selecionando elementos para manipulação inicial
const titulo = document.getElementById("titulo");
const paragrafo = document.querySelector("#paragrafo");

// Selecionando os campos de entrada (inputs)
const entradaTexto = document.querySelector("#entradaTexto");
const entradaNumero = document.querySelector("#escolhaNumero");

// Selecionando os locais SEPARADOS para as mensagens
const mensagemTexto = document.querySelector(".mensagem-texto");
const mensagemNumero = document.querySelector(".mensagem-numero");

// Selecionando o botão ÚNICO de verificação
const botao = document.querySelector("#verificarBotao"); // Usando o novo ID do botão

// Selecionando o botão de Modo Escuro
const darkModeToggle = document.getElementById("darkModeToggle");


// --- 2. MANIPULAÇÕES INICIAIS (Opcional) ---

// Altera o texto do título assim que a página carrega
titulo.innerText = "Página com JavaScript";

// Altera o conteúdo do parágrafo, incluindo HTML
paragrafo.innerHTML = "Este parágrafo foi <strong>alterado</strong> via JS.";


// --- 3. LÓGICA DO BOTÃO DE VERIFICAÇÃO ---

// Adiciona um "escutador" para o evento de clique no botão
botao.addEventListener("click", () => {
    
    // Pega o valor do campo de texto e remove espaços em branco do início e do fim
    const textoDigitado = entradaTexto.value.trim();

    // Verifica se o campo de texto está vazio
    if (textoDigitado === "") {
        mensagemTexto.innerText = "Por favor, preencha o campo de texto.";
        mensagemTexto.style.color = "red"; // Estilo opcional para erro
    } else {
        // Se não estiver vazio, exibe o que foi digitado
        mensagemTexto.innerHTML = `Texto digitado: <em>${textoDigitado}</em>`;
        mensagemTexto.style.color = "green"; // Estilo opcional para sucesso
    }

    // Pega o valor do campo de número
    const numeroEscolhido = entradaNumero.value.trim();

    // Verifica se o campo de número está vazio
    if (numeroEscolhido === "") {
        mensagemNumero.innerText = "Por favor, escolha um número.";
        mensagemNumero.style.color = "red";
    } else {
        // Se não estiver vazio, exibe o número escolhido
        mensagemNumero.innerHTML = `Número escolhido: <strong>${numeroEscolhido}</strong>`;
        mensagemNumero.style.color = "green";
    }
});


// --- 4. LÓGICA DO MODO ESCURO ---

// Adiciona um "escutador" para o evento de mudança (quando o checkbox é marcado/desmarcado)
darkModeToggle.addEventListener("change", () => {
    // Acessa o corpo (body) do documento e adiciona ou remove a classe "dark-mode"
    // O segundo argumento (darkModeToggle.checked) faz com que a classe seja ADICIONADA se o checkbox estiver marcado
    // e REMOVIDA se estiver desmarcado.
    document.body.classList.toggle("dark-mode", darkModeToggle.checked);
});

// Nota: Para o modo escuro funcionar, você precisa ter a classe .dark-mode no seu arquivo CSS.
// Exemplo para o arquivo index.css:
/*
  body.dark-mode {
    background-color: #333;
    color: #f1f1f1;
  }
*/