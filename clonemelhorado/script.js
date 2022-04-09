//Seleciona os inputs e os botões
const produto = document.querySelector('#nomeProduto');
const valor = document.querySelector('#valor')
const adicionar = document.querySelector('#adicionar')
//variável auxiliadora, na  geração de IDS
let auxiliar = 0;


//Função para criar as linhas/colunas
function cria(a){
    //Selecionando a tabela pela tag
    const tabela = document.querySelector('table')
    //Criando a linha
    const tr = document.createElement('tr');
    //Adicionando o atributo id na linha, esse id é adicionando de acordo com o valor da variável contadora
    tr.setAttribute('id',`${a}`)
    //Loop para gerar 4 colunas e preenchelas de forma automática, com o seu id, nome do produto vindo do input do produto, e valor do seu input
    for(let x = 0; x <= 3; x++){
        const td = document.createElement('td'); 
        //criando a coluna dentro do laço       
        switch(x){
            //case para cada valor de x, no case 0 ele adiciona e modifica o valor do id
            case 0:
                td.innerHTML = `${a}`
                tr.appendChild(td)
                tabela.appendChild(tr)
                break;
            case 1:
                //adiciona e pega o valor do input com o nome do produto
                td.innerHTML = produto.value
                tr.appendChild(td)
                tabela.appendChild(tr)
                break;
            case 2:
                //adiciona e modifica com o valor do produto, pego no input
                td.innerHTML = 'R$ ' + valor.value
                tr.appendChild(td)
                tabela.appendChild(tr)
                break;
            case 3:
                //adiciona as imagens dentro da coluna, e cria sua linha
                td.innerHTML = `<img src='img/escrever.png'> </img> <img src='img/bin.png' class='delete' id= '${a}' onclick='removeIMG(this.id)'> </img>`
                td.className = 'center'
                tr.appendChild(td)
                tabela.appendChild(tr)
                break;
                }             
            }
        }
        //Função feita para o botão adicionar, que faz um callback na função que cria, adicionando a variável contadora e fazendo a sua alteração a cada chamada
function adiciona(){
    auxiliar +=1 
    cria(auxiliar)                    
}
//função para remover as linhas criadas, da última para a primeira, também remove os seus ids por ordem
function remove(){
    //código de remoção com removeChild, aqui tem que ser adicionado ao pai para remover o filho
    /*let tabela = document.querySelector('table')
    tabela.removeChild(document.querySelector('.novasColunas'))*/

    //várias para recuperar as linhas criadas, com seus respectivos IDs, como eu estou removendo sempre da última para a primeira como uma pilha
    //então ela recupera pelo último valor da variável auxiliar
    let linhas = document.getElementById(`${auxiliar}`)

    //validação da variável auxiliar, para que ela não entre em valores negativos, e nem se torne 0
    if(auxiliar > 0){
        //Código de remoção direta da tag
        linhas.remove()
        auxiliar -= 1;
        }else{
            auxiliar = 0
        }

}

//Função para adicionar o efeito de remover diretamente na imagem, que ira remover a linha correspondente !Dúvida para tirar
function removeIMG(d){
    const linha = document.getElementById(`${d}`)
    linha.remove()
    //revisar a lógica aqui
    auxiliar -=d
}