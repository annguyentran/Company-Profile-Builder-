const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
        //this.role = "intern"
    }
    getRole() { 
        return "Intern"}

        getSchool(){
        return(this.school)

        }
    
        getHTML() {
            let html = `<div class="col-sm-4"><div class="card"><div class="card-body">${super.getHTML()}`;
            html+= `School:${this.getSchool()}</br>`
            html+= "</div></div></div>";
            return html; 
        }
}

module.exports = Intern;