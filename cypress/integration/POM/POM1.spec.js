// import { support } from "../../support/POMsupport1";
// describe('varify the function ',()=>{
//     let xx = new support()

//     it('validating function',()=>{
//         xx.Biodata('shubham','langote')
//     })
// })



import {homepage} from '../../support/POMsupport1'
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
    it('validate quick liunchar option ',()=>{
       // cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
        shub.validateDashbordLunch()
    })
})
