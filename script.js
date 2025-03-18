let numAleat = parseInt(Math.random()*100)+1;
let cont = 0;

function chute() {
    let palpite = document.getElementById('numSerTest').value;
    let p = document.getElementById('resultado');
    if(cont < 10){
        if(palpite == numAleat){
            p.innerHTML = `Parabéns, o numero gerado pelo sistema é ${numAleat}.
            Escolha outro número.`;
            cont = -1;
            numAleat = parseInt(Math.random()*100)+1;
        }else if(palpite < numAleat){
            p.innerHTML = `Seu palpite é menor que o número gerado. Restam ${9 - cont} palpites.`;
        }else {
            p.innerHTML = `Seu palpite é maior que o número gerado. Restam ${9 - cont} palpites.`;
        }
    }else {
        p.innerHTML = `Você não tem mais palpites.`
    }
    cont ++;
    p.value = "";
}

function nova() {
    cont = 0;
    numAleat = parseInt(Math.random()*100)+1;
    p.innerHTML = ``;
}