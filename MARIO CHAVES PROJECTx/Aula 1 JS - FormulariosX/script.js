const form  = document.querySelector("#form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll (".span-required");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//const nomeInput  = document.querySelector("#nome");
//const emailInput  = document.querySelector("#email");
//const nacionalidadeInput  = document.querySelector("#nacionalidade");
//const passwordInput  = document.querySelector("#password");
//const buttonSubmit = document.querySelector ("submit")

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    nameValidate();
    emailValidate();
    passwordValidate();
});

function setError(index){
    campos[index].style.border = '2px solid #e43436';
    spans[index].style.display = 'block'
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
    
}

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);
    }else{
        removeError(0)
    }
}

function emailValidate() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
        
    }else {
        removeError(1);
    }
}

function passwordValidate() {
    if (campos[2].value.length < 8){
        setError(2);
    }else {
        removeError(2);
    }
}

function validado() {
    if (campos[2].value.length >= 8 && campos[0].value.length >= 3 && emailRegex.test(campos[1].value)){
        location.href = ('about.html')
    }else {
       setError(2)
    }
    
}
