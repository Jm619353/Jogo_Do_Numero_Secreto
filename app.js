/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';


let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 a 10';

function verificarChute(){
    var chute = document.getElementsByTagName('btnChute');
    console.log(chute);
    
}

function reiniciarJogo(){

}
*/

//AULA 2

//FUNÇÕES COM PARÂMETROS

//CÓDIGO ANTIGO

/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';


let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 a 10';
*/
/*
let numeroSecreto = gerarNumeroAleatorio();
//FUNÇÃO COM PARÂMETROS QUE REALIZA O CÓDIGO ANTIGO
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;    
}


//EXEMPLOS
exibirTextoNaTela('h1', 'Jogo do número secreto')
exibirTextoNaTela('p', 'Escolha um número entre 1 a 10')


function verificarChute(){
    var chute = document.querySelector('input').value;
    //console.log(chute);
    console.log(numeroSecreto);
    console.log(numeroSecreto == chute);

    if (numeroSecreto != chute) {
        alert('Errou o chute!');
    }else{
        alert('O chute foi na lata')
    }
    
    
    
}

function reiniciarJogo(){

}

//FUNÇÃO COM RETORNO
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1); //Função para gerar número aleatorio, está somando 'mais' pois sem isso ficaria valores entre 0 a 10
}

*/
//AULA 3
let listaDeNumerosSorteados = [];
let numeroLimiteDeTentativas = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
}
exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }    
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimiteDeTentativas + 1); //Função para gerar número aleatorio, está somando 'mais' pois sem isso ficaria valores entre 0 a 10
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimiteDeTentativas) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}


function verificarChute(){
    var chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    mensagensTentativas = `Você descobriu com o número secreto com ${tentativas} ${palavraTentativa}, Parabéns`;

    if (numeroSecreto == chute) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagensTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        exibirTextoNaTela('p', 'Você errou! HAHAHA');
        if (numeroSecreto > chute) {
            exibirTextoNaTela('p', 'O número é maior');
        }else{
            exibirTextoNaTela('p', 'O número é menor');
        }
        tentativas++;
        limparCampo();
    }
    
    
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';   
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}