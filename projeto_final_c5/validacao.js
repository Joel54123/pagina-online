//Validação

 function validateForm() {
     var loginEmail = document.getElementsByName("loginEmail")[0].value;
     var loginPassword = document.getElementsByName("loginPassword")[0].value;
     var cadastroUsername = document.getElementsByName("name")[0].value;
     var cadastroEmail = document.getElementsByName("email")[0].value;
     var cadastroPassword = document.getElementsByName("senha")[0].value;
   if (event.submitter.name === "loginSubmit") {

   // Validação do formulário de login
   if (loginEmail.length < 4 || loginPassword.length < 5) {
   showErrorLg();
   showModal("Por favor, preencha todos os campos do formulário de login.");
   return false;
   }else {
    removeError();
   }

   // Restante da validação do login...
   } else if (event.submitter.name === "cadastroSubmit") {
   // Validação do formulário de cadastro
   function validaNome() {

   if (cadastroUsername.length < 3 || cadastroEmail.length < 14 || cadastroPassword.length < 6) {
   passBlock();
   showErrorCd();
   showModal("Por favor, preencha todos os campos do formulário de cadastro.");
   return false;
   }else{
     removeError();
   }
 }
   // Restante da validação do cadastro...
   }
 //   else if ((event.submitter.name === "loginSubmit")) {
 //     if (loginEmail >= 3 & loginPassword >= 6) { 
 //     }
 //   }
   }
   function showModal() {
     // Crie um elemento de modal para exibir o erro
     var modal = document.createElement('div');
     modal.classList.add('modal');
     modal.innerHTML = 'Por favor, preencha os campos corretamente!';
  
//     // Adicione o modal ao corpo do documento
     document.body.appendChild(modal);
  
     // Remova o modal após alguns segundos
     setTimeout(function() {
         modal.remove();
     }, 3000);
  
        return;
   }

    function showErrorLg() {
      // Crie um elemento de modal para exibir o erro
      var logEmail = document.getElementById('log-color');
      var logPassword = document.getElementById('log-color2');

      logEmail.style.border = "solid 2px red";
      logPassword.style.border = "solid 2px red";
      return;
    }

    function showErrorCd() {
      var cadName = document.getElementById('cad-color');
      var cadEmail = document.getElementById('cad-color2');
      var cadPassword = document.getElementById('cad-color3');
    
    
      cadName.style.border = "solid 2px red";
      cadEmail.style.border = "solid 2px red";
      cadPassword.style.border = "solid 2px red";

      return;
    }

    function removeError() {
      var logEmail = document.getElementById('log-color');
      var logPassword = document.getElementById('log-color2');

      logEmail.style.border = "none";
      logPassword.style.border = "none";

         return;
    }
    print (emailError())

//    function passBlock() {
//       var span1 = document.getElementById('span1');
//       var span2 = document.getElementById('span2');
//       var span3 = document.getElementById('span3');

//       // nome
//       span1.innerHTML = "Seu nome deve possuir 3 digitos no minimo";
//       span1.style.color = 'red';
//       span1.style.fontWeight = '700';
//       // email
//       span2.innerHTML = "Email inválido";
//       span2.style.color = 'red';
//       // password
//       span3.innerHTML = "Sua senha deve conter 6 digitos no minimo";
//       span3.style.color = 'red';
// }


// function fullError() {
//     if (event.submitter.name === "loginSubmit") {
//         if (loginEmail == "" || loginPassword =y= 5){
//             showErrorLg();
//         }else{
//             removeError();
//         }
//     }
