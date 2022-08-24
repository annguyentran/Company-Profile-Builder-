const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        super(name, id, email)
        this.gitHub = gitHub
        //this.role = "engineer"
    }
    getRole() { 
        return "Engineer"
    }

    getGitHub() {
        return this.gitHub
    }

    getHTML() {
        let html = `<div class="col-sm-4"><div class="card"><div class="card-body">${super.getHTML()}`;
        html+= `Github:<a href="https://github.com/${this.getGitHub()}"> ${this.getGitHub()}</a></br>`
        html+= "</div></div></div>";
        return html; 
    }
}
module.exports = Engineer;