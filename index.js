const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js'); 

const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require('./src/generatehtml.js');

teamMembers=[];

const continueQuestion=[{
        type: "list",
        name: "continue",
        message: "Do you wish to add another employee?",
        choices:["yes","no"]
        }]

const managerQuestion=[{
    
        type: "input",
        name: "data",
        message: "What is the Managers office number?"
}];
const engineerQuestion=[{
    
    type: "input",
    name: "data",
    message: "What is the Engineer's github name?"
}];
const internQuestion=[{
    type: "input",
    name: "data",
    message: "What is the Intern's School?"
}];

const genericQuestions=[
    {
    type: "input",
    name: "name",
    message: "What is the employee's name?"
    },
    {
    type: "input",
    name: "id",
    message: "What is the employee's id?"
    },
    {
    type: "input",
    name: "email",
    message: "What is the employee's email?"
    },
    {
    type: "list",
    name: "role",
    message: "What role does this person have?",
    choices:["Manager", "Engineer", "Intern"]

    }
]

function addEmployee(){
    inquirer.prompt(genericQuestions).then(function(inputs){
        var finalQuestion=[]
        switch(inputs.role){
            case "Manager":{
                console.log("manager1");
                finalQuestion=managerQuestion;
                break;
                }

            case "Engineer":{
                console.log("Engineer1")
                finalQuestion=engineerQuestion;
                break;
            }
            case "Intern":{
                console.log("intern1");
                finalQuestion=internQuestion;
                break;}
        }
        inquirer.prompt(finalQuestion).then(function(finalData)
        {
            console.log(inputs.role);
            switch(inputs.role){
                case "Manager":{
                    console.log("manager2")
                    teamMembers.push(new Manager(inputs.name,inputs.id,inputs.email,finalData.data));
                    break;
                }
                case "Engineer":{
                    console.log("Engineer2")
                    teamMembers.push(new Engineer(inputs.name,inputs.id,inputs.email,finalData.data));
                    break;
                }
                case "Intern":{
                    console.log("intern2");
                    teamMembers.push(new Intern(inputs.name,inputs.id,inputs.email,finalData.data));
                    break;}
                }
            inquirer.prompt(continueQuestion).then(function(inputs){
                switch(inputs.continue){
                    case "yes":
                        addEmployee();
                    case "no":
                        buildPage();
                }
                });

        });
    }
    );
    
}

function buildPage(){
    var data=generateHTML(teamMembers);
    console.log(data);
    fs.writeFileSync('dist/index.html', data, "UTF-8");
}

addEmployee();