const buttons = document.querySelectorAll('.choice');
const resultado = document.getElementById('resultado');
const reiniciar = document.getElementById('reiniciar');
const limparPlacar = document.getElementById('limparPlacar');
const appContainer = document.querySelector('.app-container');
const victoryAudio = document.getElementById('victoryAudio');
const defeatAudio = document.getElementById('defeatAudio');
const doubleKoAudio = document.getElementById('doubleKoAudio');
const winCount = document.getElementById('winCount');
const loseCount = document.getElementById('loseCount');
const drawCount = document.getElementById('drawCount');

let wins = 0;
let losses = 0;
let draws = 0;

const opcoes = ['pedra', 'papel', 'tesoura'];

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const escolhaUsuario = btn.dataset.choice;
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
    mostrarResultado(escolhaUsuario, escolhaComputador);
  });
});

function mostrarResultado(usuario, computador) {
  resultado.classList.remove('win', 'lose');
  appContainer.classList.remove('shake', 'shake-weak');

  if (usuario === computador) {
    resultado.textContent = `Empate! Ambos escolheram ${usuario}.`;
    draws++;
    drawCount.textContent = draws;
    try { victoryAudio.pause(); victoryAudio.currentTime = 0; } catch(e){}
    try { defeatAudio.pause(); defeatAudio.currentTime = 0; } catch(e){}
    if (doubleKoAudio) { 
      try { doubleKoAudio.currentTime = 0; doubleKoAudio.play(); } catch(e){}
    }
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
    wins++;
    winCount.textContent = wins;
    try { victoryAudio.currentTime = 0; victoryAudio.play().catch(()=>{}); } catch(e){}
    setTimeout(() => {
      appContainer.classList.remove('shake');
      resultado.classList.remove('win');
    }, 900);
  } else {
    resultado.textContent = `Você perdeu! ${computador} vence ${usuario}. 😢`;
    resultado.classList.add('lose');
    appContainer.classList.add('shake-weak');
    losses++;
    loseCount.textContent = losses;
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

limparPlacar.addEventListener('click', () => {
  wins = 0;
  losses = 0;
  draws = 0;
  winCount.textContent = '0';
  loseCount.textContent = '0';
  drawCount.textContent = '0';
  resultado.textContent = 'Placar zerado!';
  resultado.classList.remove('win', 'lose');
});
