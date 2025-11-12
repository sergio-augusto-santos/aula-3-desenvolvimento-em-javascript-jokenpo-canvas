const buttons = document.querySelectorAll('.choice');
const resultado = document.getElementById('resultado');
const reiniciar = document.getElementById('reiniciar');
const appContainer = document.querySelector('.app-container');
const victoryAudio = document.getElementById('victoryAudio');
const defeatAudio = document.getElementById('defeatAudio');
const doubleKoAudio = document.getElementById('doubleKoAudio');

const opcoes = ['pedra', 'papel', 'tesoura'];

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const escolhaUsuario = btn.dataset.choice;
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
    mostrarResultado(escolhaUsua    // Seu código repete try/catch para áudio
    try { victoryAudio.play().catch(()=>{}); } catch(e){}
    
    // Poderia ser uma função helper:
    function playAudio(audio) {
      if (audio) audio.play().catch(() => {});
    }    // Seu código repete try/catch para áudio
    try { victoryAudio.play().catch(()=>{}); } catch(e){}
    
    // Poderia ser uma função helper:
    function playAudio(audio) {
      if (audio) audio.play().catch(() => {});
    }    // Seu código repete try/catch para áudio
    try { victoryAudio.play().catch(()=>{}); } catch(e){}
    
    // Poderia ser uma função helper:
    function playAudio(audio) {
      if (audio) audio.play().catch(() => {});
    }    // Seu código repete try/catch para áudio
    try { victoryAudio.play().catch(()=>{}); } catch(e){}
    
    // Poderia ser uma função helper:
    function playAudio(audio) {
      if (audio) audio.play().catch(() => {});
    }rio, escolhaComputador);
  });
});

function mostrarResultado(usuario, computador) {
  resultado.classList.remove('win', 'lose');
  appContainer.classList.remove('shake', 'shake-weak');

  if (usuario === computador) {
    resultado.textContent = `Empate! Ambos escolheram ${usuario}.`;
    try { victoryAudio.pause(); victoryAudio.currentTime = 0; } catch(e){}
    try { defeatAudio.pause(); defeatAudio.currentTime = 0; } catch(e){}
    if (doubleKoAudio) { try { doubleKoAudio.currentTime = 0; doubleKoAudio.play().catch(()=>{}); } catch(e){} }
    return;
  }

  const usuarioGanha = (
    (usuario === 'pedra' && computador === 'tesoura') ||
    (usuario === 'papel' && computador === 'pedra') ||
    (usuario === 'tesoura' && computador === 'papel')
  );

  if (usuarioGanha) {
    resultado.textContent = `Você ganhou! ${usuario} vence ${computador}. 🎉`;
    resultado.classList.add('win');
    appContainer.classList.add('shake');
    try { victoryAudio.currentTime = 0; victoryAudio.play().catch(()=>{}); } catch(e){}
    setTimeout(() => {
      appContainer.classList.remove('shake');
      resultado.classList.remove('win');
    }, 900);
  } else {
    resultado.textContent = `Você perdeu! ${computador} vence ${usuario}. 😢`;
    resultado.classList.add('lose');
    appContainer.classList.add('shake-weak');
    try { defeatAudio.currentTime = 0; defeatAudio.play().catch(()=>{}); } catch(e){}
    setTimeout(() => {
      appContainer.classList.remove('shake-weak');
      resultado.classList.remove('lose');
    }, 800);
  }
  
}

reiniciar.addEventListener('click', () => {
  resultado.textContent = 'Faça sua escolha!';
  try { victoryAudio.pause(); victoryAudio.currentTime = 0; } catch(e){}
  try { defeatAudio.pause(); defeatAudio.currentTime = 0; } catch(e){}
  try { if (doubleKoAudio) { doubleKoAudio.pause(); doubleKoAudio.currentTime = 0; } } catch(e){}
  resultado.classList.remove('win', 'lose');
  appContainer.classList.remove('shake', 'shake-weak');
});
