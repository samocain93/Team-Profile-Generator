const Manager = require('../lib/Manager')
const manager = new Manager('Bobby Lee', 99, 'bobbylee@hello.com', 'B200')

dscribe("manager", () => {
    describe('tests properties of Manger constructor', () => {
        it ('tests name property', () => {
            expect (manager.name).toEqual('Bobby Lee')
        })
        it ('tests manager id property', () => {
            expect (manager.id).toEqual(99)
        })
        it ('tests manager email property', () => {
            expect (manager.email).toEqual('bobbylee@hello.com')
        })
        it ('tests manager office number property', () => {
            expect (manager.officeNumber).toEqual('B200')
        })
    })

    describe('tests methods of Manger constructor function', () => {
        it ('tests getRole method', () => {
            expect (manager.getRole()).toEqual('Manager')
        })
    })
})