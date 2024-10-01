/*
Foi declarado o valor de X como um valor nulo
Como não foi declado nada ao valor de y ele ficou como um valor indefinido
 Foi definido um valor a variavel 
*/
let x = null;
console.log(x)
let y;
console.log(y)
var variavel = "teste";
console.log(variavel)

/*
Aqui foi declarado a variável numero como uma string, usando o parseFloar para definir um número
decimal. Foi usado a variavel vertipo para trazer ao console o tipo da variavel,
nesse caso ela seria um string
*/

let numero = "10.40"
console.log(parseFloat(numero));
let vertipo = typeof numero
console.log(vertipo)
/*
Aqui foi declarado a variavel numero2 como um número inteiro usando o parseInt
Após isso foi usado o parseFloat para definir como um número decimal
Foi usado a variavel vertipo para trazer ao console o tipo da variavel, 
nesse caso ela seria um number(número)
*/

let numero2 = 200
console.log(parseInt(numero2))
console.log(parseFloat(numero2))
let vertipo2 = typeof numero2
console.log(vertipo2)

/*
Aqui foi declarado a variavel numero3 como um número float usando o parseFloat
Após isso foi usado o parseInt para definir como um número inteiro
Foi usado a variavel vertipo para trazer ao console o tipo da variavel, nesse caso ela seria um inteiro
*/

let numero3 = 654.27
console.log(parseFloat(numero3))
console.log(parseInt(numero3))
let vertipo3 = typeof numero3
console.log(vertipo3)

/*
Aqui form declarados os valores de nome,idade,email e teleone
Após isso foi utilizado o documente.write para aparecer na página e o <br> para quebrar o texto e ficar em sequência um abaixo do outro
*/
let nome = "Kayque Carvalho"
let email = "kayque@gmail.com"
let idade ="18"
let telefone = "(11) 9 9999-9999"

document.write("Nome:"+nome+"<br>")
document.write("Idade:"+idade+"<br>")
document.write("E-mail:"+email+"<br>")
document.write("Telefone:"+telefone+"<br>")
