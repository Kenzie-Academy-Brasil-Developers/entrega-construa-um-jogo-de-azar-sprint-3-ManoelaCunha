function jogadaAtual(){

    const random = Math.floor(Math.random() * 20 + 1);
    
    const result = document.getElementById("result");
    const answers = document.createElement('p');
    answers.classList.add('result__text');
    result.appendChild(answers);

    switch (random) {
        case 1: answers.innerText = "Isso é Certo!";
            break;
        case 2: answers.innerText = "Certamente que sim!";
            break;
        case 3: answers.innerText = "Sem dúvida!";
            break;
        case 4: answers.innerText = "Com certeza!";
            break;
        case 5: answers.innerText = "Pode contar com isso!";
            break;
        case 6: answers.innerText = "A meu ver, sim!";
            break;
        case 7: answers.innerText = "É provável.";
            break;
        case 8: answers.innerText = "Boas perspectivas";
            break;
        case 9: answers.innerText = "Sim!";
            break;
        case 10: answers.innerText = "Sinais apontam que sim.";
            break;
        case 11: answers.innerText = "Não está claro, tente de novo.";
            break;
        case 12: answers.innerText = "Pergunte de novo mais tarde.";
            break;
        case 13: answers.innerText = "É melhor não te dizer agora.";
            break;
        case 14: answers.innerText = "Neste momento, não!";
            break;
        case 15: answers.innerText = "Concentre-se e pergunte de novo.";
            break;
        case 16: answers.innerText = "Não conte com isso!";
            break;
        case 17: answers.innerText = "Minha resposta é não!";
            break;
        case 18: answers.innerText = "Minhas fontes dizem que não.";
            break;
        case 19: answers.innerText = "As perspectivas não são boas.";
            break;
        case 20: answers.innerText = "Muito duvidoso.";
            break;
    };
};

function textColor(){

    const randomColor = Math.floor(Math.random() * 6 + 1);

    const answers = document.querySelector('.result__text');

    switch (randomColor) {
        case 1: answers.style.color = 'red';
            break;
        case 2: answers.style.color = 'yellow';
            break;
        case 3: answers.style.color = 'cyan';
            break;
        case 4: answers.style.color = 'chartreuse';
            break;
        case 5: answers.style.color = 'hotpink';
            break;
        case 6: answers.style.color = 'orange';
            break;
    };
};

const button = document.getElementById("button");
button.addEventListener("click", function () {
    document.getElementById("result").innerText = "";
    jogadaAtual(); 
    textColor();
});

const reset = document.getElementById("reset");
reset.addEventListener("click", function () {
    document.getElementById("result").innerText = "";
});