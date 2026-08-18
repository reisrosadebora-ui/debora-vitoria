// Variável para armazenar a contagem de curtidas
let likesCount = 0;

// Seleção dos elementos do DOM
const likeBtn = document.getElementById('likeBtn');
const likesDisplay = document.getElementById('likesCount');

// Evento de clique no botão
likeBtn.addEventListener('click', () => {
  likesCount++;
  
  // Atualiza o texto na tela
  likesDisplay.textContent = likesCount;
  
  // Adiciona a classe de animação no número
  likesDisplay.classList.add('pop-animation');
  
  // Remove a classe após a animação para permitir novos cliques animados
  setTimeout(() => {
    likesDisplay.classList.remove('pop-animation');
  }, 300);
});
