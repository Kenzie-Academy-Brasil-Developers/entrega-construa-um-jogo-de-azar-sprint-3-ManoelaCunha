const labelPedra = document.getElementById("img__pedra");
const imgPedra = document.createElement("img");
imgPedra.src = "../img/pedra-left.png";
imgPedra.classList.add("pedra");
labelPedra.appendChild(imgPedra);

const labelPapel = document.getElementById("img__papel");
const imgPapel = document.createElement("img");
imgPapel.src = "../img/papel-left.png";
imgPapel.classList.add("papel");
labelPapel.appendChild(imgPapel);

const labelTesoura = document.getElementById("img__tesoura");
const imgTesoura = document.createElement("img");
imgTesoura.src = "../img/tesoura-left.png";
imgTesoura.classList.add("tesoura");
labelTesoura.appendChild(imgTesoura);


const pedra_btn = document.getElementById("pedra");
pedra_btn.addEventListener("click", function (){
    document.querySelector(".computador__escolha").innerHTML = "";
    imgPedra.style.backgroundColor = 'cornflowerblue';
    imgPapel.style.backgroundColor = '';
    imgTesoura.style.backgroundColor = '';
    imgPapel.style.borderColor = '';
    imgTesoura.style.borderColor = '';
    jogadaAtual();
});

const papel_btn = document.getElementById("papel");
papel_btn.addEventListener("click", function (){
    document.querySelector(".computador__escolha").innerHTML = "";
    imgPapel.style.backgroundColor = 'cornflowerblue';
    imgPedra.style.backgroundColor = '';
    imgTesoura.style.backgroundColor = '';
    imgPedra.style.borderColor = '';
    imgTesoura.style.borderColor = '';
    jogadaAtual();
});

const tesoura_btn = document.getElementById("tesoura");
tesoura_btn.addEventListener("click", function(){
    document.querySelector(".computador__escolha").innerHTML = "";
    imgTesoura.style.backgroundColor = 'cornflowerblue';
    imgPapel.style.backgroundColor = '';
    imgPedra.style.backgroundColor = '';
    imgPapel.style.borderColor = '';
    imgPedra.style.borderColor = '';
    jogadaAtual();
});


let countJogador = 0;
let countComputador = 0;

function jogadaAtual() {

    const computador = Math.floor(Math.random() * 3);
    
    const computadorEscolha = document.querySelector(".computador__escolha");
    const imgComputador = document.createElement("img");
    computadorEscolha.appendChild(imgComputador);

    switch (computador) {
        case 0: imgComputador.src = "../img/pedra-right.png";
            break;
        case 1: imgComputador.src = "../img/papel-right.png";
            break;
        case 2: imgComputador.src = "../img/tesoura-right.png";
            break;
    }

    const result = document.getElementById("result__text");
    const pointsJogador = document.querySelector('.jogador__contagem');
    const pointsComputador = document.querySelector('.computador__contagem');
  
    if ((pedra_btn.checked === true && computador === 0) ||
        (papel_btn.checked === true && computador === 1) ||
        (tesoura_btn.checked === true && computador === 2)) {
        result.innerText = "Você Empatou!";
        result.style.backgroundColor = 'khaki';
    } 
    
    if ((pedra_btn.checked === true && computador === 2) ||
        (papel_btn.checked === true && computador === 0) ||
        (tesoura_btn.checked === true && computador === 1)) {
        result.innerText = "Parabéns! Você Venceu!";
        result.style.backgroundColor = 'darkseagreen';
        countJogador ++;  
        pointsJogador.innerText = countJogador;  
    } 
    
    if ((pedra_btn.checked === true && computador === 1) ||
        (papel_btn.checked === true && computador === 2) ||
        (tesoura_btn.checked === true && computador === 0)) {
        result.innerText = "Você Perdeu! Tente outra vez!";
        result.style.backgroundColor = 'coral';
        countComputador ++;
        pointsComputador.innerText = countComputador;
    }
}


const resetJogo = document.getElementById("reset__jogo");
resetJogo.addEventListener("click", function () {
    imgPedra.style.backgroundColor = '';
    imgPapel.style.backgroundColor = '';
    imgTesoura.style.backgroundColor = '';
    imgPedra.style.borderColor = '';
    imgPapel.style.borderColor = '';
    imgTesoura.style.borderColor = '';
    document.querySelector(".computador__escolha").innerHTML = "";
    document.getElementById("result__text").innerText = "";
    document.getElementById("result__text").style.backgroundColor = '';
});

const resetPoints = document.getElementById("reset__points");
resetPoints.addEventListener("click", function () {
    document.querySelector('.jogador__contagem').innerText = 0;
    document.querySelector('.computador__contagem').innerText = 0;
    countJogador = 0;
    countComputador = 0;
});