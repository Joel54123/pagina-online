<?php
// Dados de conexão ao banco de dados
include_once "conexao.php";
// Dados do usuário fornecidos no formulário de login
$emailUsuario = $_POST['email'];
$senhaUsuario = $_POST['senha'];
// Verificação de erros na conexão
if ($conn->connect_error) {
die("Erro na conexão: " . $conn->connect_error);
}
// Consulta SQL para buscar o registro do usuário pelo nome
$sql = "SELECT * FROM usuarios WHERE email = '$emailUsuario'";
$result = $conn->query($sql);
// Verifica se o registro foi encontrado
if ($result->num_rows > 0) {
// Obtém os dados do registro encontrado
$row = $result->fetch_assoc();
// Verifica se o email fornecido corresponde ao email armazenado no registro
if ($senhaUsuario == $row['senha']) {
// Login bem-sucedido
header("Location: ../../falhas/ExpenseManagement-PHP/ExpenseManagement-PHP/index.php");
} else {
// Login falhou - email incorreto
echo "Senha incorreto. Tente novamente.";
}
} else {
// Login falhou - usuário não encontrado
echo "Usuário não encontrado. Tente novamente.";
}
// Fecha a conexão com o banco de dados
$conn->close();
?>
