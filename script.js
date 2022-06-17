const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const gameOver = document.querySelector(".gameOver")
//
const jump = () => {
  // adicionando um evento para adicionar uma class
  mario.classList.add("jump");
  // removendo a class adicionada apos 500ms
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};
// loop para verificar se perdeu.
const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  //getComputerStyles() pega o estilo que foi add no gif do mario
  //replace("px" , "") Tira o px é deixa apenas os números.
  //o + antes do window  tenta transformas a string em number.
  const marioPositon = +window.getComputedStyle(mario).bottom.replace("px", "");
  if (pipePosition < 70 && pipePosition > 0 && marioPositon < 70) {
    // styles no tuneo verde
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;
    // styles nas img do mario
    mario.style.animation = "none";
    mario.style.bottom = `${marioPositon}px`;
    mario.src = "./img/game-over.png";
    mario.style.width = "40px";
    mario.style.marginLeft = "50px";

    clouds.style.animation = "none";

    gameOver.style.display = "block";

    // limpa o loop asim que o game acaba.
    clearInterval(loop);
  }
}, 10);
// adicionando evento de click
// keydown / aperte qualquer tecla
document.addEventListener("keydown", jump);
