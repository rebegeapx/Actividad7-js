//Desarrollar un método para verificar si una palabra es un palíndromo
//Casos de prueba: var word1='madam' var word2='computadora'

function palindromo(palabra)
{
    //partir la palabra y despues unirla al revés para compararla con la original
    return palabra.split('').reverse().join('')==palabra;
}
var1='madam';
var2='computadora';
console.log(palindromo(var1));
console.log(palindromo(var2));
