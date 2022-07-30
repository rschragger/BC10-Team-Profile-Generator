//Get requires
const fs = require('fs');
const inquirer = require('inquirer');
//const jest = require('jest')

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var serialNo = 0 ;
const employeeList=[] ;


//const engineer = new Engineer(name, id, email, github) ;

// Functions


function employeeQuestions(thisRole) {

let questions=[
    {
        type: 'checkbox',
        message: 'What employee type is this person?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Employee'],   
        when: !thisRole,
    },{
        type: 'input',
        name: 'fullName',
        message: 'What is their name?',
    },{
        type: 'input',
        name: 'id',
        message: 'What is their ID?',
    },{
        type: 'email',
        name: 'email',
        message: 'What is their email address?',
    },{
        type: 'input',
        name: 'officeNumber',
        message: 'What is their Office Number?',
        when: thisRole==='Manager',
    },
]
   return inquirer
        .prompt(questions)
        .then((response) => {
          if(thisRole){response.role=thisRole}
          if(response.role='Manager'){
            manager = new Manager(response.fullName,response.id,response.email,response.officeNumber);
             employeeList.push(manager)
          }
       
          console.log(employeeList)
          if(employeeList.length<2){employeeQuestions()}
          
        })
        .catch((err)=>{
            console.log(err)
        })
};

  function Init() {
    console.log("Welocme to your team builder application. Please start by adding in detail for your Team Manager.");
    employeeQuestions('Manager');

}

Init()

/*

 async function Init() {
    
    array.push(await origManagerQuestion());
    console.log("Answer:" + array)
}


/////
    {
        type: 'input',
        name: 'ID',
        message: 'What is this Employee\'s ID?',
        //https://stackoverflow.com/questions/62798907/how-to-clear-wrong-input-in-inquirer-js
        validate: (answer) => {
            if (isNaN(answer)) {
              return "please enter a number";
            }
            return true;
          },
    },
])
*/




/*{
  type: 'checkbox',
  message: 'What languages do you know?',
  name: 'stack',
  choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
},
{
  type: 'list',
  message: 'What is your preferred method of communication?',
  name: 'contact',
  choices: ['email', 'phone', 'telekinesis'],
},
*/
