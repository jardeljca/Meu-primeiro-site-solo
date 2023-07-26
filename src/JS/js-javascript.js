/* O trecho do código abaixo solicita um nome ao usuário e após imprime em tela usando conteúdo armazenado na variável */
var nome = window.prompt('Qual o seu nome?')

var divnome = document.getElementById("nome")
divnome.innerHTML = "O nome é " + nome;

/* O trecho abaixo vai somar dois números */
var num1 = Number.parseInt(window.prompt('Digite o primeiro número'))
var num2 = Number.parseInt(window.prompt('Digite o segundo número'))
var somanum = num1 + num2;

var somanumero = document.getElementById("soma")
somanumero.innerHTML = "A soma dos números é " + somanum;