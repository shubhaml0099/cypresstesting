// plain code without using utilitys or POM




//import {homepage} from "../OrangeHRM/HRM"
describe('orangeHRM site login ', () => {

    //let Utility = new homepage()

    beforeEach('URL',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    })
    it.only('logine to orangeHRM site', () => {
        //Utility.Login('Admin','admin123')
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('[name="txtUsername"]').type('Admin')
        cy.get('[name="txtPassword"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.url().should('contain', 'dashboard')

    })
    it.only('Add Employee name in employee list ', () => {
        // Utility.Login('Admin','admin123')
        // Utility.AddEmployee('Yogiraj','y','Yelpale','Yogiraj','Yelpale123')
        //utility.ValidateEmployee('Yogiraj y Yelpale')
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('[name="txtUsername"]').type('Admin')
        cy.get('[name="txtPassword"]').type('admin123')
        cy.get('[type="submit"]').click()

        cy.get('[id="mainMenu"]>ul>li').eq(1).click()
        //cy.get('[class="main-menu-first-level-list-item"]').eq(1).find('ul').eq(2).click({force: true})
        cy.get('#menu_pim_addEmployee').click({ force: true })

        cy.get('input[id="firstName"]').type('shubham')
        cy.get('input[id="middleName"]').type('mohan')
        cy.get('input[id="lastName"]').type('langote')
        cy.get('#chkLogin').click()
        cy.get('#user_name').type('shubhaml')
        cy.get('#user_password').type('Shubham0099')
        cy.get('#re_password').type('Shubham0099')
        cy.get('#status').select('Enabled')
        cy.get('#btnSave').click()
        cy.wait(2000)
        cy.get('#menu_pim_viewEmployeeList').click({ force: true })
        cy.wait(2000)
        cy.get('[name="empsearch[employee_name][empName]"]').eq(0).type('shubham mohan langote')
        cy.wait(2000)
        cy.get('[id="searchBtn"]').click()
        cy.get('.odd > :nth-child(3) > a').should('contain', 'shubham')
    })
    it('delete addea user name',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('[name="txtUsername"]').type('Admin')
        cy.get('[name="txtPassword"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.get('#menu_pim_viewEmployeeList').click({ force: true })
        cy.wait(2000)
        cy.get('[name="empsearch[employee_name][empName]"]').eq(0).type('shubham mohan langote')
        cy.wait(2000)
        cy.get('[id="searchBtn"]').click()
        cy.get('#ohrmList_chkSelectRecord_73').click()
        cy.get('#btnDelete').click()
        cy.get('#dialogDeleteBtn').click()

    })
})