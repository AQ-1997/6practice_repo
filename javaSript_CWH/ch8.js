/* var age = prompt("Enter your age");
if(age>=10 && age<=20)
{
    console.log("you are between adoloscent");
}else{
    console.log("where are you from");
}*/

/* var age = prompt("enter the age");
switch (Number.parseInt(age)) {
    case 12:
        console.log('your age is 12');
        break
    case 13:
        console.log('your age is 13')
        break
    case 14:
        console.log('your age is 14');
    case 15:
        console.log('your age is 15')
    default:
        console.log('your age is undefined')
}*/

// {
//     let age = prompt('enter your age')
//     let a = (age>18) ? 'You can Drive' : 'You can not Drive'
//     console.log(a);
// }
// {
//     let age = prompt("enter the number");
//     console.log(age);
//     let sum=0;
//     for (let i=0; i<10; i++)
//     {
//         sum+=i+1;
//     }
//     console.log(sum);
// }

// let arr = [1, 'Abdul', 12.54, 'Abdul123.54']
// for(let a in arr)
// {
//     console.log(typeof(arr[a]));
// }

let obj = {
    ritika: 35,
    varun: 45,
    arun: 87,
    andrew: 98
    
}
// console.log(marks);
for(let a in obj)
{
    console.log(`marks of ${a} are ${obj[a]}`);
}