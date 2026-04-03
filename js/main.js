document.getElementById("btn-reintentar").style.display = "block";
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let tiempoRegresivoId = null;
let timerInicial = 30;
let parIncorrecto = new Audio(`./sound/parIncorrecto.wav`);
let clickAudio = new Audio(`./sound/click.wav`);
let juegoPerdido = new Audio(`./sound/juegoPerdido.wav`);
let juegoGanado = new Audio(`./sound/juegoGanado.wav`);
let parCorrecto = new Audio(`./sound/parCorrecto.wav`);
let mostarMovimientos = document.getElementById(`movimientos`);
let mostarAciertos = document.getElementById(`aciertos`);
let mostarTiempo = document.getElementById(`t-restante`);

function mezclar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//generar numeros aleatorios
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numeros = mezclar(numeros);
console.log(numeros);

function contarTiempo() {
  tiempoRegresivoId = setInterval(() => {
    timer--;
    mostarTiempo.innerHTML = `⏱️Tiempo: ${timer} segundos`;

    if (timer == 0) {
      clearInterval(tiempoRegresivoId);
      bloquearTarjetas();
      juegoPerdido.play();
      mostarTiempo.innerHTML = `⏱️Tiempo agotado 😢`;
    }
  }, 1000);
}

function bloquearTarjetas() {
  for (let i = 0; i <= 15; i++) {
    let tarjetaBloqueada = document.getElementById(i);
    tarjetaBloqueada.innerHTML = `<img src="./img/${numeros[i]}.png" alt="">`;
    tarjetaBloqueada.disabled = true;
  }
}

function destapar(id) {
  if (temporizador == false) {
    contarTiempo();
    temporizador = true;
  }

  tarjetasDestapadas++;

  if (tarjetasDestapadas == 1) {
    //mostrar el primer numero
    tarjeta1 = document.getElementById(id);
    primerResultado = numeros[id];
    tarjeta1.innerHTML = `<img src="./img/${primerResultado}.png" alt="">`;
    clickAudio.play();

    tarjeta1.disabled = true;
  } else if (tarjetasDestapadas == 2) {
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    tarjeta2.innerHTML = `<img src="./img/${segundoResultado}.png" alt="">`;

    tarjeta2.disabled = true;

    movimientos++;
    mostarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

    if (primerResultado == segundoResultado) {
      tarjetasDestapadas = 0;

      aciertos++;
      mostarAciertos.innerHTML = `Aciertos: ${aciertos}`;
      parCorrecto.play();

      if (aciertos == 8) {
        juegoGanado.play();
        lanzarConfetti();

        clearInterval(tiempoRegresivoId);
        mostarAciertos.innerHTML = `Aciertos: ${aciertos}`;
        mostarTiempo.innerHTML = `Fantastico demoraste ${
          timerInicial - timer
        } segundos`;
        mostarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
      }
    } else {
      parIncorrecto.play();
      setTimeout(() => {
        tarjeta1.innerHTML = ` `;
        tarjeta2.innerHTML = ` `;
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0;
      }, 800);
    }
  }
}

function reiniciarJuego() {
  location.reload();
}

function lanzarConfetti() {
  let contenedor = document.getElementById("confetti-container");

  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    confetti.style.width = confetti.style.height = Math.random() * 8 + 5 + "px";

    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";

    contenedor.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}
