<?php
include_once("conexao.php");

$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];

// echo "Nome: $nome <br>";
// echo "E-mail: $email <br>";

$result_usuario = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$senha')";
$resultado_usuario = mysqli_query($conn, $result_usuario);

if(mysqli_insert_id($conn)){
	header("Location: ../index.php");
}else{
	echo "erro ao cadastrar";
}
