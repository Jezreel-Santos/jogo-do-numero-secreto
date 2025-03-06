
/*
//Substituído pelo trecho de códiogo da função exibirTextoNaTela

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10.';
*/

//BLOCO DE INICIALIZAÇÃO

menssagemInicial();

let numeroSecreto = gerarNumeroAleatório();

console.log(numeroSecreto);

let tentativa = 1;

novoJogo(true);


//BLOCO DE FUNÇÕES

function menssagemInicial(){

    exibirTextoNaTela('h1', 'Jogo do Número Secreto');

    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100.');

}

function exibirTextoNaTela(tag, texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

function apagarH3(){

    let campo = document.querySelector('h3');
    campo.innerHTML = '';

}

function gerarNumeroAleatório(){

    let numero = parseInt((Math.random() * 100) + 1);
    return numero;

}

function limparCampo(){

    chute = document.querySelector('input');
    chute.value = '';

}

function desabilitarChute(tipo){

    const botaoChutar = document.getElementById('chutar');
    botaoChutar.disabled = tipo;

}

function novoJogo(tipo){

    const botaoReiniciar = document.getElementById('reiniciar');
    botaoReiniciar.disabled = tipo;

}



function verificarChute(){

    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 100.');

    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){

        exibirTextoNaTela('h3', ' ');
        exibirTextoNaTela('h2', `PARABÉNS! Você acertou o número.`);

        let menssagem = `Você fez ${tentativa} ${tentativa == 1 ? 'tentativa.' : 'tentativas.'}`;

        exibirTextoNaTela('p', menssagem);

        desabilitarChute(true);

        novoJogo(false);
        
    }else if(chute > numeroSecreto){

        exibirTextoNaTela('h3', 'O número secreto é MENOR do que o chute.');

        setTimeout(limparCampo, 2800);
        setTimeout(apagarH3, 3000);

        tentativa++;
        
    }else{

        exibirTextoNaTela('h3', 'O número secreto é MAIOR do que o chute.');

        setTimeout(limparCampo, 2800);
        setTimeout(apagarH3, 3000);

        tentativa++;
        
    }

    
}


function jogar(){

    menssagemInicial();
    
    exibirTextoNaTela('h2', '');

    numeroSecreto = gerarNumeroAleatório();

    console.log(numeroSecreto);

    tentativa = 1;

    novoJogo(true);

    limparCampo()

    desabilitarChute(false);

}


