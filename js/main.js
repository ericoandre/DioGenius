let Ordem = [];
let clickedOrder = [];
let score = 0;

const azul = document.querySelector('.azul');
const vermelho = document.querySelector('.vermelho');
const verde = document.querySelector('.verde');
const amarelo = document.querySelector('.amarelo');

let mistura = () => {
    let OrdemCor = Math.floor(Math.random() * 4);
    Ordem[Ordem.length]=OrdemCor;
    clickedOrder = [];

    for(let i in Ordem){
        let elementoCor = crearElementoCor(Ordem[i]);
        acenderCor(elementoCor, Number(i)+1);
    }
}
const acenderCor = (elemento, tempo) =>{
    tempo = tempo *  500;
    setTimeout(()=>{
        elemento.classList.add('aceso');
    }, tempo - 250);
    setTimeout(()=>{
        elemento.classList.remove('aceso');
    },tempo);
}
let checaOrdem = () =>{
    for(let i in clickedOrder){
        if(clickedOrder[i]!=Ordem[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length === Ordem.length){
        alert(`Score: ${score}\nVoce acertou! Iniciando Proscimo Nivel!`);
        proscimoNivel();
    }
}
let click = (cor)=>{
    clickedOrder[clickedOrder.length]=cor;
    crearElementoCor(cor).classList.add('aceso');
    setTimeout(()=>{
        crearElementoCor(cor).classList.remove('aceso');
        checaOrdem();
    }, 250);
    
}
let crearElementoCor = (cor) => {
    if(cor == 0) {
        return verde;
    } else if(cor == 1) {
        return vermelho;
    } else if (cor == 2) {
        return amarelo;
    } else if (cor == 3) {
        return azul;
    }
}
let proscimoNivel = () => {
    score++;
    mistura();
}
const gameOver = ()=>{
    alert(`Score: ${score}\nVoce Perdeu!\nclique em ok para Inicia o Jogo`);
    Ordem = [];
    clickedOrder = [];
    iniciaJogo();
}
const iniciaJogo = ()=>{
    alert(`Bem Vindo ao Genesis`);
    score=0;
    proscimoNivel();
}

verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);

iniciaJogo();