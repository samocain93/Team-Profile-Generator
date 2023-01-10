const Intern = require('../lib/Intern')
const intern = new Intern('Bert Kreischer', 76, 'bigbert@gmail.com', "The Machine University")

describe('intern', () => {
    describe ('tests properties of intern constructor function', () => {
        it ('tests intern name property', () => {
            expect (intern.name).toEqual('Bert Kreischer')
        })
        it ('tests intern id property', () => {
            expect (intern.id).toEqual(76)
        })
        it ('tests intern email property', () => {
            expect (intern.email).toEqual('bigbert@gmail.com')
        })
        it ('tests intern school property', () => {
            expect (intern.school).toEqual('The Machine University')
        })
    })

    describe ('test methods of Intern constructor', () => {
        it ('tests getSchool method', () => {
            expect (intern.getSchool()).toEqual('The Machine University')
        }) 
        it ('tests getRole method', () => {
            expect (intern.getRole()).toEqual('Intern')
        }) 
    })
})