
const Employee = require('../lib/Employee');

const employee = new Employee('Bob', 1, 'hello@me.com');

describe('employee', () => {
    describe('test all employee properties', () => {
        it('tests employee name', () => {
            expect (employee.name).toEqual('John')
        })
        it('test employee id', () => {
            expect (employee.id).toEqual(1);
        })
    })
    describe('test all employees methods', () => {
        it ('tests get name method', () => {
            expect (employee.getName()).toEqual('Bob')
        })
    })
})