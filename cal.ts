#!/usr/bin/env mode


import inquirer from "inquirer";
import {sum} from "./add.js"
import{sub} from "./sub.js"
import{mult} from "./mult.js"
import{div} from "./div.js"

let answers = await inquirer.prompt([
  {
    name: "num1",
    type: "number",
    message: "Enter first number:"
  },
  {

      name: "num2",
      type: "number",
      message:"Enter second number:",
    
},
{
  name: "operator",
  type:"list",
  message: "select operater",
    //Choices: ["+", "-", "*", "/"],
  choices:["add","sub","mul","div"]
    
}
]);
console.log(answers.operator);


 if(answers.operator ==="add"){
     const result=sum(answers.num1,answers.num2);
       console.log(`sum${answers.num1}+${answers.num2}=${result}`)
 }
else if(answers.operator ==="sub"){
     const result =sub(answers.num1,answers.num2);
     console.log(`sub${answers.num1}-${answers.num2}=${result}`);
     
    }

    
else if(answers.operator==="mul"){
  const result =mult(answers.num1,answers.num2);
  console.log(`mult${answers.num1}*${answers.num2}=${result}`);

 }
     
else if(answers.operator==="div"){
  const result =div(answers.num1,answers.num2);
  console.log(`div${answers.num1}/${answers.num2}=${result}`);

 };