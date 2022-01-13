const textoAparecendo = document.getElementById("typewriter");
const frases = ["experiências web.", "colaborativamente.", "código legível."];

let i = 0;
let j = 0;
let fraseAtual = [];
let estaApagando = false;

function loop() {
  fimDaFrase = false;
  textoAparecendo.innerHTML = fraseAtual.join("");

  if (i < frases.length) {
    if (!estaApagando && j <= frases[i].length) {
      fraseAtual.push(frases[i][j]);
      j++;
      textoAparecendo.innerHTML = fraseAtual.join("");
    }

    if (estaApagando && j <= frases[i].length) {
      fraseAtual.pop(frases[i][j]);
      j--;
      textoAparecendo.innerHTML = fraseAtual.join("");
    }

    if (j == frases[i].length) {
      fimDaFrase = true;
      estaApagando = true;
    }

    if (estaApagando && j === 0) {
      fraseAtual = [];
      estaApagando = false;
      i++;
      if (i == frases.length) {
        i = 0;
      }
    }
  }
  const velocidadeAcelerada = Math.random() * (160 - 140);
  const velocidadeNormal = Math.random() * (180 - 120) + 100;
  const tempo = fimDaFrase
    ? 2000
    : estaApagando
    ? velocidadeAcelerada
    : velocidadeNormal;
  setTimeout(loop, tempo);
}

loop();
