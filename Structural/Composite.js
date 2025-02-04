/**
 * Composite Pattern lets clients to treat the individual objects in a uniform manner
 */


class Developer{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }

    getName(){
        return this.name;
    }

    setSalary(salary){
       this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }

    getRoles(){
        return this.getRoles;
    }
    
    develop(){
        /**
         * 
         */
    }
}

class Designer{
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }

    getName(){
        return this.name;
    }

    setSalary(salary){
       this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }

    getRoles(){
        return this.getRoles;
    }

    design(){
        /**
         * 
         */
    }
}

class Organization{
    constructor(){
        this.employees = [];
    }

    addEmployee(employee){
      this.employees.push(employee);
    }

    getNetSalaries(){
        let netSalary = 0;
        this.employees.forEach(employee =>{
            netSalary += employee.getSalary()
        })
        return netSalary;
    }
}

const john = new Developer('Johj Doe', 12000);
const jane = new Designer('Jane', 10000);

const organization = new Organization();
organization.addEmployee(john);
organization.addEmployee(jane);

console.log(`Net Salaries : ${organization.getNetSalaries()}`);