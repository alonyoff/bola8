let respostas = ["Sim", "Não", "Talvez", "Claro que sim", "Claro que não","Obvio que sim", "Obvio que não", "Hoje não","Amanhã","Essa pergunta é muito importante para ser respondida aleatoriamente"]

function escolheRespostas(){
    let pegaResposta = respostas[Math.floor(Math.random() * respostas.length)];
    document.querySelector(".bola8").innerHTML = pegaResposta;
}