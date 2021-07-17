const labelPedra = document.getElementById("img__pedra");
const imgPedra = document.createElement("img");
imgPedra.src = "/img/pedra-left.png";
imgPedra.classList.add("pedra");
labelPedra.appendChild(imgPedra);

const labelPapel = document.getElementById("img__papel");
const imgPapel = document.createElement("img");
imgPapel.src = "/img/papel-left.png";
imgPapel.classList.add("papel");
labelPapel.appendChild(imgPapel);

const labelTesoura = document.getElementById("img__tesoura");
const imgTesoura = document.createElement("img");
imgTesoura.src = "/img/tesoura-left.png";
imgTesoura.classList.add("tesoura");
labelTesoura.appendChild(imgTesoura);


const pedra_btn = document.getElementById("pedra");
pedra_btn.addEventListener("click", function (){
    document.querySelector(".computador__escolha").innerHTML = "";
    imgPedra.style.backgroundColor = 'cornflowerblue';
    imgPedra.style.borderColor = 'cornflowerblue';
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
    imgPapel.style.borderColor = 'cornflowerblue';
    imgPedra.style.backgroundColor = '';
    imgTesoura.style.backgroundColor = '';
    imgPedra.style.borderColor = '';
    imgTesoura.style.borderColor = '';
    jogadaAtual();
});

const tesoura_btn = document.getElementById("tesoura");
tesoura_btn.addEventListener("click", function(){
    document.querySelector(".computador__escolha").innerHTML = "";
    imgTesoura.style.backgroundColor = 'cornflowerblue'
    imgTesoura.style.borderColor = 'cornflowerblue';
    imgPapel.style.backgroundColor = '';
    imgPedra.style.backgroundColor = '';
    imgPapel.style.borderColor = '';
    imgPedra.style.borderColor = '';
    jogadaAtual();
});


function jogadaAtual() {

    const computador = Math.floor(Math.random() * 3);
    
    const computadorEscolha = document.querySelector(".computador__escolha");
    const imgComputador = document.createElement("img");
    computadorEscolha.appendChild(imgComputador);

    switch (computador) {
        case 0: imgComputador.src = "/img/pedra-right.png";
            break;
        case 1: imgComputador.src = "/img/papel-right.png";
            break;
        case 2: imgComputador.src = "/img/tesoura-right.png";
            break;
    }

    const result = document.getElementById("result__text");

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
    } 
    
    if ((pedra_btn.checked === true && computador === 1) ||
        (papel_btn.checked === true && computador === 2) ||
        (tesoura_btn.checked === true && computador === 0)) {
        result.innerText = "Você Perdeu! Tente outra vez!";
        result.style.backgroundColor = 'tomato';
    }
}


const reset = document.getElementById("reset");
reset.addEventListener("click", function () {
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