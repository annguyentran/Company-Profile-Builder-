const inquirer = require("inquirer");
const Engineer = require("./LIB/Engineer");
const Intern = require("./LIB/Intern");
const Manager = require("./LIB/Manager")

function mainMenu() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "direction",
                message: "What type of employee would you like to add?",
                choices: ["Manager", "Engineer", "Intern", "Done"]

            }
        ]).then((result) => {
            if (result.direction === "Manager") {
                askManager()
            } else if (result.direction === "Engineer") {
                askEngineer()
            } else if (result.direction === "Intern") {
                askIntern()
            } else { console.log("Goodbye") }
        }).catch((err) => {
            console.log(err)
        });

}

function askManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What the name of the employee?"

        },
        {
            type: "input",
            name: "id",
            message: "What the ID of the employee?"

        },

        {
            type: "input",
            name: "email",
            message: "What the email of the employee?"

        },

        {
            type: "input",
            name: "officenumber",
            message: "What the office number of the employee?"

        }

    ]).then(result => {const manager = new Manager
        (result.name, result.id, result.email, result.officenumber)
    console.log(manager)
    })

}

function askEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What the name of the employee?"

        },
        {
            type: "input",
            name: "id",
            message: "What the ID of the employee?"

        },

        {
            type: "input",
            name: "email",
            message: "What the email of the employee?"

        },

        {
            type: "input",
            name: "gitHub",
            message: "What the Github username of the employee?"

        }

    ]).then(result => {const engineer = new Engineer
        (result.name, result.id, result.email, result.gitHub)
    console.log(engineer)
    })

}

function askIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What the name of the employee?"

        },
        {
            type: "input",
            name: "id",
            message: "What the ID of the employee?"

        },

        {
            type: "input",
            name: "email",
            message: "What the email of the employee?"

        },

        {
            type: "input",
            name: "school",
            message: "What the school of the employee?"

        }

    ]).then(result => {const intern = new Intern
        (result.name, result.id, result.email, result.school)
    console.log(intern)
    })

}
mainMenu()