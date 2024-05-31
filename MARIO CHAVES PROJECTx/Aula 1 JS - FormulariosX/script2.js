const form  = document.querySelector("#form");
const nomeInput  = document.querySelector("#nome2");
//const emailInput  = document.querySelector("#email");
//const nacionalidadeInput  = document.querySelector("#nacionalidade");
const passwordInput  = document.querySelector("#password2");
const buttonSubmit = document.querySelector ("submit")

/*console.log (form, nomeInput, emailInput);*/



    /*if (nomeInput.value === "Mario") {
        alert ("Processando...");
        return
    }else {
    	alert ("Nome ou senha invalidos!!!")
    }

        if (passwordInput.value === "Mario") {
        alert ("Processando...");
        return
    }else {
    	alert ("nome ou senha invalidos!!!")
    }

    if (nomeInput.value == "Mario" && passwordInput == "Mario") {
    	location.href = ("Welcome.html")
    	return
    }*/

 
 



function logValidation() {
    if (nomeInput.value === "Mario" && passwordInput.value === "Mario") {
        alert ("Login feito com sucesso");
        location.href = 'about.html'
        
    }else {
        alert ('Nome ou senha inválidos')
    }
    
}
