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