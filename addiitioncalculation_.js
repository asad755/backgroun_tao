import inquirer from "inquirer";
const input1 = await inquirer.prompt([{
        name: "num1",
        type: "number",
        message: "Enter your first no"
    }]);
const input2 = await inquirer.prompt([{
        name: "num2",
        type: "number",
        message: "Enter your second no"
    }]);
let total = input1.num1 + input2.num2;
console.log(`The total is ${total}`);
