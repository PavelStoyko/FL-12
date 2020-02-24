class Employee {
    static get EMPLOYEES() {
        if (!this._EMPLOYEES) {
            this._EMPLOYEES = [];
        }
        return this._EMPLOYEES;
    }
    constructor(worker) {
        this.id = worker.id;
        this.firstName = worker.firstName;
        this.lastName = worker.lastName;
        this.birthday = worker.birthday;
        this.salary = worker.salary;
        this.position = worker.position;
        this.department = worker.department;
        Employee.EMPLOYEES.push(this);
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    get age() {
        const todayYear = new Date().getFullYear();
        const birthYear = new Date(this.birthday).getFullYear();
        return todayYear - birthYear;
    }
    quit() {
        Employee.EMPLOYEES.splice(Employee.EMPLOYEES.indexOf(this), 1);
    }
    retire() {
        console.log('It was such a pleasure to work with you!');
        this.quit();
    }
    getFired() {
        console.log('Not a big deal!');
        this.quit();
    }
    changeDepartment(newDepartment) {
        this.department = newDepartment;
    }
    changePosition(newPosition) {
        this.position = newPosition;
    }
    changeSalary(newSalary) {
        this.salary = newSalary;
    }
    getPromoted(benefits) {
        for (let key in benefits) {
            if (Object.prototype.hasOwnProperty.call(benefits, key)) {
                this[key] = benefits[key];
            }
        }
        console.log('Yoohooo!');
    }
    getDemoted(punishment) {
        for (let key in punishment) {
            if (Object.prototype.hasOwnProperty.call(punishment, key)) {
                this[key] = punishment[key];
            }
        }
        console.log('Damn!');
    }
}
Employee._EMPLOYEES = [];
class Manager extends Employee {
    constructor(e) {
        super(e);
        e.position = 'manager';
    }
    get managedEmployees() {
        return Employee.EMPLOYEES.filter(
            employee => employee.department === this.department && employee.position !== 'manager'
        );
    }
}
class BlueCollarWorker extends Employee {}
class HRManager extends Manager {
    constructor(e) {
        super(e);
        this.department = 'hr';
    }
}
class SalesManager extends Manager {
    constructor(e) {
        super(e);
        this.department = 'sales';
    }
}
const promoter = {
    promote(id, value) {
        const employee = this.managedEmployees.find(e => e.id === id);
        if (employee) {
            employee.getPromoted({ salary: value });
        }
    }
};
function ManagerPro(employee, upgrade) {
    return Object.assign(employee, upgrade);
}