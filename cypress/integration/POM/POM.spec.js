
import {homepage} from '../../support/POMsupport'
describe('varify the home page ',()=>{
    let shub = new homepage()
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    })

    it('validate the login',()=>{
        
        shub.ValidateLogin('Admin','admin123')
        cy.url().should('include','index.php/dashboard')
    })
    it('validate logo',()=>{
        shub.validatelogo()
    })
    it('validate forgote paswar',()=>{
        shub.ValidateForgotpasward()
    })
    it('validate social icon',()=>{
        shub.ValidateSocialicon()
    })

})





// import { HomePage } from '../../support/xyz'
// describe('verify the homepage', () => {
//     let abc = new HomePage
//     beforeEach(function () {
//         cy.visit('https://opensource-demo.orangehrmlive.com/')
//     })
//     it('validate the login', () => {
//         abc.Login('Admin', 'admin123')
//         cy.url().should('include', 'dashboard')
//     })
//     it('validate the logo', () => {
//         abc.validateLogo()
//     })
//     it('validate the forgot password', () => {
//         abc.validateforpass()
//     })
//     it('validate the social media icon', () => {
//         abc.validatesocialicon()
//     })

// })


