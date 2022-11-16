var a = 10;
// console.log(a);
// console.log(++a);
// console.log(a++);
// console.log(a);
// // 
var a = prompt("Enter something");
// let result = (a>= 18) ? 'you can vote' : 'cant vote'
// console.log(result);
// alert(result);
// alert(result);

a= Number.parseInt(a);
console.log(a);
if(a<0)
{
    console.log("invalid ")
}
else if(a>10 && a<15)
{
    console.log("kid ")
}
else if(a>18)
{
    console.log("adult ")
}
else
{
    console.log("valid ")
}
