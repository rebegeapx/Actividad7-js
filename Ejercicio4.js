/*Crea un programa, el cual sirva para convertir temperaturas de Celsius a 
Farenheit y viceversa. Que dicho programa reciba como argumentos las temperaturas 
y regresa el resultado imprimiendo en pantalla la conversión*/




//Farenheit a Celsuis -----> (32 °F − 32) × 5/9 = 0 °C

function Far_Cel(farenheit)
{
    let resCel= ((farenheit-32)*(5/9));
    return resCel;
}
// Celsuis a Farenheit -----> (0 °C × 9/5) + 32 = 32 °F
function Cel_Far(celsius)
{
    let resFar= ((celsius*(9/5))+32);
    return resFar;
}

console.log(Far_Cel(59));
console.log(Cel_Far(59));

