//inicializacion de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado= null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer= 30;
let tiempoRegresivoId = null;
let timerInicial = 30;
let parIncorrecto = new Audio(`./sound/parIncorrecto.wav`);
let clickAudio = new Audio(`./sound/click.wav`);
let juegoPerdido = new Audio(`./sound/juegoPerdido.wav`);
let juegoGanado = new Audio(`./sound/juegoGanado.wav`);
let parCorrecto = new Audio(`./sound/parCorrecto.wav`);

 //apuntando a doc html
 let mostarMovimientos = document.getElementById(`movimientos`);
 let mostarAciertos = document.getElementById(`aciertos`);
 let mostarTiempo = document.getElementById(`t-restante`);

//generar numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=> {return Math.random()-0.5});
console.log(numeros);

//funciones
function contarTiempo (){
    tiempoRegresivoId = setInterval(()=>{
        timer--;
        mostarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer == 0){
            clearInterval(tiempoRegresivoId);
            bloquearTarjetas();
            juegoPerdido.paly();
        }
    },1000);
}

function bloquearTarjetas(){
    for (let i = 0; i <=15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML =`<img src="./img/${numeros[i]}.png" alt="">`;
        tarjetaBloqueada.disabled = true;
    }
}



//funcion principal
function destapar (id){
    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapadas ++;

    if(tarjetasDestapadas == 1){
    //mostrar el primer numero
    tarjeta1 = document.getElementById(id);
    primerResultado = numeros[id];
    tarjeta1.innerHTML = `<img src="./img/${primerResultado}.png" alt="">`;
    clickAudio.play();

    //desabilitar primer boton
    tarjeta1.disabled = true;

    }else if (tarjetasDestapadas ==2){
        //mostrar segundo numero
        tarjeta2 =document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = `<img src="./img/${segundoResultado}.png" alt="">`;

        //desabilitar segundo boton
        tarjeta2.disabled = true;

        //incrementar movimientos
        movimientos++;
        mostarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(primerResultado == segundoResultado){
            //encerar contador tarjetas destapadas
            tarjetasDestapadas = 0;

            //aumentar aciertos
            aciertos++;
            mostarAciertos.innerHTML = `Aciertos: ${aciertos}`;
            parCorrecto.play();

            if(aciertos == 8){
                juegoGanado.play();
                clearInterval(tiempoRegresivoId);
                mostarAciertos.innerHTML = `Aciertos: ${aciertos}`;
                mostarTiempo.innerHTML = `Fantastico demoraste ${timerInicial - timer} segundos`;
                mostarMovimientos.innerHTML =`Movimientos: ${movimientos}`;
            }
        }else{
            parIncorrecto.play();
            //mostar momentaneamente valores y volver a tapar
            setTimeout(()=>{
                tarjeta1.innerHTML = ` `;
                tarjeta2.innerHTML = ` `;
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            },800);
        }
    }
}