var jogador, vencedor = null //guarda o jogador da vez
var jogadorSelecionado = document.getElementById('jogador-selecionado')//Selecionando a div de seleção de jogador
var vencedorSelecionado = document.getElementById('vencedor-selecionado')

var quadrados = document.getElementsByClassName('quadrados');


mudarJogador(valor = 'x'); //Iniciando o jogador com valor x

function escolheQuadrado(id){
   var quadrado = document.getElementById(id);
   if(vencedor !== null){
       return;
   }
   if(quadrado.innerHTML != '-'){
    return 
    }   //por questão de lógica, isto deve vim primeiro pois irá verificar se ele é diferente antes de inserir.

   quadrado.innerHTML = jogador;
   quadrado.style.color = '#000';

    

   if(jogador === 'x'){
        jogador = 'O';
   }else{
       jogador = 'x'
   }
   
   mudarJogador(jogador) //fazendo um callback para retornar de qual jogador é a vez
   checaVencedor()
}

//função para iniciar o jogador com valor
function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}


//função para pegar todos os quadrados
function checaVencedor(){
    var quadrado1 = document.getElementById('1');
    var quadrado2 = document.getElementById('2');
    var quadrado3 = document.getElementById('3');
    var quadrado4 = document.getElementById('4');
    var quadrado5 = document.getElementById('5');
    var quadrado6 = document.getElementById('6');
    var quadrado7 = document.getElementById('7');
    var quadrado8 = document.getElementById('8');
    var quadrado9 = document.getElementById('9');
    if(checaSequencia(quadrado1,quadrado2,quadrado3)){
        mudaCorQuadrado(quadrado1,quadrado2,quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if(checaSequencia(quadrado4,quadrado5,quadrado6)){
        mudaCorQuadrado(quadrado4,quadrado5,quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if(checaSequencia(quadrado7,quadrado8,quadrado9)){
        mudaCorQuadrado(quadrado7,quadrado8,quadrado9);
        mudarVencedor(quadrado7);
        return;
    }
    
    if(checaSequencia(quadrado1,quadrado4,quadrado7)){
        mudaCorQuadrado(quadrado1,quadrado4,quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if(checaSequencia(quadrado2,quadrado5,quadrado8)){
        mudaCorQuadrado(quadrado2,quadrado5,quadrado8);
        mudarVencedor(quadrado2);
      
    }
    if(checaSequencia(quadrado3,quadrado6,quadrado9)){
        mudaCorQuadrado(quadrado3,quadrado6,quadrado9);
        mudarVencedor(quadrado3);
      
    }
    if(checaSequencia(quadrado1,quadrado5,quadrado9)){
        mudaCorQuadrado(quadrado1,quadrado5,quadrado9);
        mudarVencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado3,quadrado5,quadrado7)){
        mudaCorQuadrado(quadrado3,quadrado5,quadrado7);
        mudarVencedor(quadrado3);
        return;
    }

}

//muda o texto do vencedor e do selecionado
function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}
//Só funciona quando vence
function mudaCorQuadrado(q1,q2,q3){
    q1.style.backgroundColor = '#0f0'
    q2.style.backgroundColor = '#0f0'
    q3.style.backgroundColor = '#0f0'
}

//função para validar as sequências vencedoras
function checaSequencia(quadrado1,quadrado2,quadrado3){
    var eigual = false
    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true
    }
    return eigual;
}

/*
Função para reiniciar, mas eu utilizei uma function direto na tag
chamada location.reload(), onde ele recarrega a página dispensando o 
uso desta função.
function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    for(var i = 1; i <= 9; i++){
        var quadrado = document.getElementById(i)
        i.style.backgroundColor = '#eee';
        i.style.color = "#eee";
        i.innerHTML = '-';
        jogadorSelecionado.innerHTML = '';
    }
}
*/