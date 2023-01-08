
const Employee = require('../lib/Employee');
const employee = new Employee('Michael Jordan', 23, 'mj@me.com')

describe('employee', () => {
    describe('test all employee properties', () => {
        it('tests employee name', () => {
            expect (employee.name).toEqual('Michael Jordan');
        })
        it('test employee id', () => {
            expect (employee.id).toEqual(23);
        })
        it('tests email property', () => {
            expect(employee.email).toEqual('mj@me.com');
        })
    })
    describe('test all employees methods', () => {
        it ('tests get name method', () => {
            expect (employee.getName()).toEqual('Michael Jordan');
        })
        it('tests get id method', () => {
            expect (employee.getId()).toEqual(23);
        })
        it('tests get email method', () => {
            expect (employee.getEmail()).toEqual('mj@me.com');
        })
        it('tests get role method', () => {
            expect (employee.getRole()).toEqual('Employee');
        })
    })
    
})