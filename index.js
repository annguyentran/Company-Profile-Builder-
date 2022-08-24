const inquirer = require("inquirer");
const Engineer = require("./LIB/Engineer");
const Intern = require("./LIB/Intern");
const Manager = require("./LIB/Manager") 

fs = require("fs");

let employees = [];

function mainMenu() {

    inquirer
        .prompt([
            {
                type: "list",
                name: "direction",
                message: "What type of employee would you like to add?",
                choices: ["Engineer", "Intern", "Done"]

            }
        ]).then((result) => {
            if (result.direction === "Engineer") {
                askEngineer()
            } else if (result.direction === "Intern") {
                askIntern()
            } else { 

                console.log("Goodbye") 

                // Create and save the html file 
                let html = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                <title>Team Profile</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
                <link rel="stylesheet" href="./dist/style.css">
                </head>

                <header id="title">My Team</header>
                <body>
                <div class="row">
                `
       for (let i = 0; i < employees.length; i++){

        let employee = employees[i];
        html += employee.getHTML();
        

       }
         html+= `</div></body>
         </html> `       

                



                
                console.log(html)
                fs.writeFile("index.html", html, function(err, html) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("FILE CREATED");
                    }
                    });
            }
        }).catch((err) => {
            console.log(err)
        });

}

function askManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What the name of the manager?"

        },
        {
            type: "input",
            name: "id",
            message: "What the ID of the manager?"

        },

        {
            type: "input",
            name: "email",
            message: "What the email of the manager?"

        },

        {
            type: "input",
            name: "officenumber",
            message: "What the office number of the manager?"

        }

    ]).then(result => {
         const manager = new Manager (
            result.name, result.id, result.email, result.officenumber
            )
        employees.push(manager)

        console.log(manager)


        mainMenu()

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

    employees.push(engineer)

        mainMenu()
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

    employees.push(intern)

        mainMenu()
    })

}
askManager()


