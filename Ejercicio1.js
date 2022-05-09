
/*
--Crear una función que recibe 2 parámetros 
(una oración y una palabra a buscar)
Retornar true o false en caso de que una oración contenga 
una palabra dada.

*/
function palabras(words,findWord)
{
    if(words.indexOf(findWord)!=-1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var i=palabras("Hola mundo", "mundo");
console.log(i);

