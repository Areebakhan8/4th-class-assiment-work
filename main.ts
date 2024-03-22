import inquirer from "inquirer";
let answer = await inquirer.prompt([{
  
    name: "username",
    type: "string",
    message: "what is your name?",
  }])

console.log("welcome!" +answer.username);

answer= await inquirer.prompt([{

 name: "age",
 type: "number",
 message: " Enter your age?", 

}])

console.log('you are`'+ answer.age +'`years old')


