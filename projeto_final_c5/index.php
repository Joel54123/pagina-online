<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="fontawesome-free-6.4.2-web/css/all.css">
    <link rel="stylesheet" href="style.css">
    <title>Pagina de login</title>
    <style>

    </style>
</head>

<body>

    <div class="container" id="container">
        <div class="form-container sign-up">
            <!-- formulario de cadastro onsubmit="return validateForm()" -->
            <form action="data-base/cad_user.php" method="post" id="cadastroForm" onsubmit="return validateCadastro()">
                <h1>Criar Conta</h1>
                <div class="social-icons">
                    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>Registe-se com o seu e-mail</span>
                <input id="cadastroUsername" name="nome" type="text" placeholder="Name" oninput="validateCadastroInput(this)">
                <span class="cadastroErrorMessage">Seu nome deve possuir no minimo 3 caracteres</span>
                <input id="cadastroEmail" name="email" type="email" placeholder="Email" oninput="validateCadastroInput(this)">
                <span class="cadastroErrorMessage">Digite um email valido</span>
                <input id="cadastroPassword" name="senha" type="password" placeholder="Password" oninput="validateCadastroInput(this)"> 
                <span class="cadastroErrorMessage">Senha fraca</span>
                <button type="submit" name="cadastroSubmit">Cadastrar</button>
            </form>
            <!-- fim do formulario de cadastro -->
        </div>
        <div class="form-container sign-in">
            <form action="data-base/dados_login.php" method="post" onsubmit="return validateLogin()">
                <!-- formulario de login -->
                <h1>Login</h1>
                <div class="social-icons">
                    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>Faca login com o seu email e password</span>
                <input id="loginEmail" name="email" type="email" placeholder="Email" oninput="validateLoginInput(this)">
                <span class="loginErrorMessage">Dados invalidos</span>
                <input id="loginPassword" name="senha" type="password" placeholder="Password" oninput="validateLoginInput(this)">
                <span class="loginErrorMessage">Dados inválidos</span>
                <a href="#">Esqueceu a senha?</a>
                <button type="submit" name="loginSubmit">Sign In</button>
            </form>
            <!-- fim do formulario de login -->
        </div>
        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-left">
                    <h1>Bem vindo a Virtual Wallet!</h1>
                    <p>Insira seus dados para desfrutar do melhor do nosso do site</p>
                    <button class="hidden" id="login">Login</button>
                </div>
                <div class="toggle-panel toggle-right">
                    <h1>Ola, Amigo!</h1>
                    <p>Insira seus dados para desfrutar do melhor do nosso do site</p>
                    <button class="hidden" id="register">Cadastrar</button>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>~
    <script src="new.js"></script>
</body>

</html>