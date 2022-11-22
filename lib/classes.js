class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this. email = email;
    }
getName() {
    let employeeName = new 
}

}

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}

class Engineer extends Employee {
    constructor(name, id, email, githubUsername,) {
        super(name, id, email);
        this.githubUsername = githubUsername;
    } 
}

class Intern extends Employee {
    constructor(name, id, email, schoolName) {
        super(name, id, email);
        this.schoolName = schoolName;
    }
}