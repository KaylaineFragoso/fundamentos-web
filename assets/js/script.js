/*
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByClassName()
por Seletor: queryselector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false 
let mapa = document.querySelector ("#mapa")

let contador = document.querySelector("#contador")
contador.innerHTML = "0 / 100"

nome.style.width = "50%"
email.style.width = "50%"
assunto.style.width ="50%"

function validaNome()  {
    let txt = document.querySelector("#txtNome")

    if (nome.value.length < 3) {
        txt.innerHTML = "Nome Inválido"
        txt.style.color = "red"
    } else {
       txt.innerHTML = "Nome Válido"
       txt.style.color = "blue"
       nomeOk = true
       

    }
}

function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail")

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
      txtEmail.innerHTML ="E-mail Inválido"
      txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "blue"
        emailOk = true
  }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto");

    contador.innerHTML = `${assunto.value.length} / 100`

    if (assunto.value.length > 100) {
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres";
        txtAssunto.style.color = "red";
        txtAssunto.style.display = "block";

    } else {
        txtAssunto.style.display = "none"
         assuntoOk = true;
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
      alert("Formulário enviado com sucesso!");
    } else {
      alert("Preencha o formulário corretamente antes de enviar...");
    }
  }

function count(){
    let contador = document.querySelector("#contador")
    contador.innerHTML = "${assunto.value.length} / 144"
  }

function subirTela () {
    window.scrollTo(0,0)
}