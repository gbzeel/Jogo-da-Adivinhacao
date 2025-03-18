let numAleat = parseInt(Math.random()*100)+1;
let cont = 0;

function chute() {
    let palpite = document.getElementById('numSerTest').value;
    let p = document.getElementById('resultado');
    if(cont < 10){
        if(palpite == numAleat){
            p.innerHTML = `Parabéns, o número gerado pelo sistema é ${numAleat}.
            Vamos tentar outra vez? Escolha outro número.`;
            cont = -1;
            numAleat = parseInt(Math.random()*100)+1;
        }else if(palpite < numAleat){
            p.innerHTML = `Tente um número maior. Restam ${9 - cont} palpites.`;
        }else {
            p.innerHTML = `Tente um número menor. Restam ${9 - cont} palpites.`;
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