const Engineer = require('../lib/Engineer')
const engineer = new Engineer('Tom Segura', 50, 'tommybunz@gmail.com', 'tsegura' )

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
            expect(engineer.github).toEqual('tsegura');
        })
    })
    describe('test all engineer methods for constructor', () => {
     
        it('tests getGithub method', () => {
            expect (engineer.getGithub()).toEqual('tsegura');
        })
        it('tests getRole method', () => {
            expect (engineer.getRole()).toEqual('Engineer');
        })
    })
})