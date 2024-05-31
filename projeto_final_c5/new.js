// Validar o formulário de login em tempo real
function validateLoginInput(input) {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorMessage = document.querySelectorAll('.loginErrorMessage');

    function setError(index) {
        errorMessage[index].style.color = 'red';
        errorMessage[index].style.display = 'block';
    }

    function removeError(index) {
        errorMessage[index].style.display = 'none';
    }

    if (email == '' || password.length < 5) {
        setError(0);
        setError(1);
    } else {
        removeError(0);
        removeError(1);
    }
}

// Validar o formulário de cadastro em tempo real
function validateCadastroInput(input) {
    const username = document.getElementById('cadastroUsername').value;
    const email    = document.getElementById('cadastroEmail').value;
    const password = document.getElementById('cadastroPassword').value;
    const errorMessage = document.querySelectorAll('.cadastroErrorMessage');

    function setError(index) {
        errorMessage[index].style.color = 'red';
        errorMessage[index].style.display = 'block';
    }

    function removeError(index) {
        errorMessage[index].style.display = 'none';
    }

    //  if (username.trim() == '' && password.trim() == '' && email.trim() == '' && username.length < 3) {

    //  } else {

    // }

    if (username.trim() !== '' && !(username.length < 3)) {
        removeError(0);
    }else{
        setError(0);
        return
    }

    if (email.trim() == '') {
        setError(1);
        return
    }else{
        removeError(1);
    }

    if (password.length < 5) {
        setError(2);
    }else{
        removeError(2);
        return
    }
}

// Validar o formulário de login
function validateLogin() {
    // Realize validações adicionais, se necessário
    return document.getElementById('loginErrorMessage').style.display === 'none';
}

// Validar o formulário de cadastro
function validateCadastro() {
    // Realize validações adicionais, se necessário
    return document.querySelectorAll('.cadastroErrorMessage').style.display === 'none';
}



