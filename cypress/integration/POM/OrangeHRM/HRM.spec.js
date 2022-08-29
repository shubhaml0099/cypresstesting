import {homepage} from "../OrangeHRM/HRM"
//import * as login from "../"
describe('orangeHRM site login ', () => {

    let Utility = new homepage()

    beforeEach('URL',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    })
    it('logine to orangeHRM site', () => {
        Utility.Login('Admin','admin123')

        cy.url().should('contain', 'dashboard')

    })
    it('Add Employee name in employee list ', () => {
        Utility.Login('Admin','admin123')
        Utility.AddEmployee('Yogiraj','y','Yelpale','Yogiraj','Yelpale123')

       })
        
    it('Validate the added Employee name in employee list ', () => {
        Utility.Login('Admin','admin123')
        Utility.AddEmployee('Yogiraj','y','Yelpale','Yogiraj','Yelpale123')
        Utility.ValidateEmployee('Yogiraj y Yelpale')
        
        cy.get('.odd > :nth-child(3) > a').should('contain', 'Yogiraj')
    })

    it('delete addea user name',()=>{
         Utility.Login('Admin','admin123')
        Utility.DeleteEmployee('Yogiraj y Yelpale')
 
    })
})