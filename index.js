// REQUIRES //

const fs = require('fs');
const inquirer = require('inquirer');


// EMPLOYEE LIBRARIES //

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// TEAM ARRAY //

const team = [];



// ADD TEAM MEMBER FUNCTION //

function addTeamMember() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'teamMember',
                message: 'Add an engineer, intern, or finish setting up your team',
                choices: ['Engineer', 'Intern', 'Build My Team']

            }
        ])
        .then((response) => {
            if (response.teamMember === 'Engineer') {
                addEngineer();
            } else if (response.teamMember === 'Intern') {
                addIntern();
            } else {
                buildTeam()
            }
        });
}


// --- EMPLOYEE CREATION FUNCTIONS --- //

//            MANAGER               //

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team manager?'
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is the Employee ID of the team manager?'
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?"
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the team manager?'
        }

    ])
    .then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        team.push(manager);
        addTeamMember();
    })
}


//          ENGINEER            //

function addEngineer() {
    
}