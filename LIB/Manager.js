const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officenumber){
        super(name, id, email)
        this.officeNumber = officenumber
        this.role = "manager"
    }

    getRole() {
        return "Manager";
    }

    getOfficenumber() {
        return this.officeNumber;

    }
    getHTML() {
        let html = `<div class="col-sm-4"><div class="card"><div class="card-body">${super.getHTML()}`;
        html+= `Office Number: ${this.getOfficenumber()}</br>`
        html+= "</div></div></div>";
        return html; 
    }
}
module.exports = Manager;