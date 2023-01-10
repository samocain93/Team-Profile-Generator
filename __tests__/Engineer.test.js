const Engineer = require('../lib/Employee')
const engineer = new Engineer('Tom Segura', 50, 'tommybunz@gmail.com', 'tsegura@github.com' )

describe('engineer', () => {
    describe('tests all employee properties', () => {
        it('tests engineer name', () => {
            expect (engineer.name).toEqual('Tom Segura');
        })
        it('tests engineer id', () => {
            expect (engineer.id).toEqual(50);
        })
        it('tests email property', () => {
            expect(engineer.email).toEqual('tommybunz@gmail.com');
        })
        it('tests github property', () => {
            expect(engineer.github).toEqual('tsegura@github.com');
        })
    })
    describe('test all engineers methods', () => {
     
        it('tests getGithub method', () => {
            expect (engineer.getGithub()).toEqual('tsegura@github.com');
        })
        it('tests getRole method', () => {
            expect (engineer.getRole()).toEqual('Engineer');
        })
    })
})