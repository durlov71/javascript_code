// ARRAY

 friends = ['sakib','Musfiq','Tamim','soumya','Mehedi'];

 console.log(friends);
 console.log(typeof friends);
 console.log(friends[2]);
 console.log(friends[3]);
 console.log(friends[1]);

 console.log(friends.length);



 //function
 function myName(name){
     console.log('Hi ! This is '+name)
 }
 myName('Sakib');
 myName('Musfiq');
 myName('Akash');

function calSum(num1,num2){
    let sum= num1+num2;
    return sum
       
}
let results=calSum(20,35);
console.log(results);

 /*
 let num1=20,num2=30;
 let sum= num1+num2;
 console.log(sum);
 */

 
 //TEMPLATE LITERALS

 let name='Jhon';
 console.log('My name is '+name);
 console.log(`My name is ${name}`);
 console.log(`Sum is ${24 + 511}`);

 let message = `Hi john! 
How are You?` 
 console.log(message)