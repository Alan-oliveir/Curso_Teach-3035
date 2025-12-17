// --- PROJETO 4: GERADOR DE COR ALEATÓRIA ---

// 1. Selecionamos os elementos que vamos manipular
const colorBox = document.getElementById("color-box");
const colorBtn = document.getElementById("color-btn");

/**
 * 2. Esta é a função que gera uma cor aleatória em formato hexadecimal.
 * (ex: #FF5733)
 */
function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

if (colorBtn && colorBox) {
  // Dizemos ao botão: "Quando você for clicado, execute esta função"
  colorBtn.addEventListener("click", function () {
    // 3a. Chamamos nossa função para pegar uma nova cor
    const newColor = getRandomHexColor();

    // 3b. Aplicamos a nova cor ao estilo 'backgroundColor' da caixa
    colorBox.style.backgroundColor = newColor;

    // Bônus: Vamos exibir o código da cor dentro da caixa!
    colorBox.textContent = newColor;

    // Bônus 2: Mudar a cor do texto para preto para garantir a leitura
    colorBox.style.color = "#333";
  });

  colorBox.addEventListener("mouseover", function () {
    const hoverColor = getRandomHexColor();
    colorBox.style.backgroundColor = hoverColor;
    colorBox.textContent = hoverColor;
  });
}

// --- FIM DO PROJETO 4 ---

// --- PROJETO 5: CALCULADORA ---

// 1. Seleciona os elementos da calculadora
const display = document.getElementById("calc-display");
const botoesContainer = document.querySelector(".calc-botoes");

// 2. Verifica se estamos na página da calculadora (para evitar erros)
if (display && botoesContainer) {
  // 3. Adiciona um ouvinte de eventos ao container dos botões
  botoesContainer.addEventListener("click", function (event) {
    // Pega o elemento que foi clicado
    const target = event.target;

    // Ignora cliques no espaço entre os botões
    if (!target.matches("button")) {
      return;
    }

    // Ação do botão LIMPAR (C)
    if (target.id === "btn-limpar") {
      display.value = "";
      return;
    }

    // Ação do botão IGUAL (=)
    if (target.id === "btn-igual") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Erro";
      }
      return;
    }

    // Ação para todos os outros botões (números e operadores)
    // Adiciona o texto do botão (ex: "7", "8", "+") ao display
    display.value += target.textContent;
  });
}

// --- FIM DO PROJETO 5 ---
