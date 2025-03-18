let numAleat = parseInt(Math.random()*100)+1;
let cont = 0;

function chute() {
    let palpite = document.getElementById('numSerTest').value;
    if(cont < 10){
        if(palpite == numAleat){
            document.getElementById('resultado').innerHTML = `Parabéns, o numero gerado pelo sistema é ${numAleat}.
            Escolha outro número.`;
            cont = -1;
            numAleat = parseInt(Math.random()*100)+1;
        }else if(palpite < numAleat){
            document.getElementById('resultado').innerHTML = `Seu palpite é menor que o número gerado. Restam ${9 - cont} palpites.`;
        }else {
            document.getElementById('resultado').innerHTML = `Seu palpite é maior que o número gerado. Restam ${9 - cont} palpites.`;
        }
    }else {
        document.getElementById('resultado').innerHTML = `Você não tem mais palpites.`
    }
    cont ++;
    document.getElementById('numSerTest').value = "";
}

function nova() {
    cont = 0;
    numAleat = parseInt(Math.random()*100)+1;
    document.getElementById('resultado').innerHTML = ``;
}