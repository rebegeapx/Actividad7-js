
var numbers = [1,2,3,4,10,11]

 function suma(){
     let sum=numbers.reduce((a,b)=>a+b,0);
     console.log(sum);
}
suma()

