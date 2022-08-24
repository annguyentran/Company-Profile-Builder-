class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        //this.role = "Employee" 
    
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }

    getHTML() {
        return `
        <h1>${this.getRole()}</h1>
        Name: ${this.getName()}</br>
        ID: ${this.getId()}</br>
        Email: <a href="${this.getEmail()}">${this.getEmail()}</a></br>
        `
    }

}
module.exports = Employee;

