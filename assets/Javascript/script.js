/*
Posso acessar o dom por TAG
getElementByTagName ()
por ID: getElementById()
por nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querrySelector() / selecionamos o nome, id ou classe com seletor
*/
let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector ('#mapa')

nome.style.width = '100%'
email.style.width = '100%'


function validarNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        //se for menor que 3 valor vou adicionar esse valor no html com inner html
        txtNome.innerHTML = 'nome inválido'
        txtNome.style.color = 'red'
        nomeOk = false
    }else{
        txtNome.innerHTML = "nome válido"
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail (){
    let txtEmail = document.querySelector('#txtEmail')
    //Para saber se dentro do meu email vou ver o @ e o ponto uso o indexOf. Uso 1 caso exista e uso -1 caso não exista
    if(email.value.indexOf('@')== -1 || email.value.indexOf('.')== -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        emailOk = false

    }else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validarAssunto (){
    let txtAssunto = document.querySelector('#txtAssunto')
    
    if(assunto.value.length >=100){
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOk = false

    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
if(nomeOk == true && emailOk == true && assuntoOk == true){
    alert('enviado!')
}else{
    alert('preencha o nome corretamente!')
}
}

function mapaZoom (){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal (){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}