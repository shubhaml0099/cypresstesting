import { Login } from "./Login";
    let amazon = new Login

describe('validate Amazon site logine func tionality',()=>{
    beforeEach(function(){
        amazon.Visit()
        amazon.LoginValidateInput('shubhamlangote0099@gmail.com','Amazon@99')
        cy.url().should('contain', 'dashboard') 
    })
    it('varify the Logo on dash board',()=>{
        amazon.Logo()
    })
})