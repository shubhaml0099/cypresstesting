
describe('verify sign up form using fixture', function () {
    // global
    before(() => {
        cy.fixture("user").then((data) => {
            this.data = data
        })
    })



    it.only('verify the functionality for sign - up form with fixture', () => {

        /---------/
        // cy.log(this.data.firstName)
        //    cy.log(this.data)
        //    this.data['firstName'] = "ram"
        //    cy.log(this.data)

        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(this.data.FirstName)
        cy.get('input[name="last_name"]').type(this.data.LastName)
        cy.get('input[name="email"]').type(this.data.Email)
        cy.get('textarea[name="message"]').type(this.data.Comments)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })



    it('verify the functionality for sign - up form fixture -2', () => {
        cy.fixture('user').then(function (data) {
            cy.log(data)
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.FirstName)
            cy.get('input[name="last_name"]').type(data.LastName)
            cy.get('input[name="email"]').type(data.Email)
            cy.get('textarea[name="message"]').type(data.Comments)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })

    })

    it('verify the functionality for sign - up form reset button', () => {
        cy.fixture('user').then(function (data) {
            cy.log(data)
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.FirstName)
            cy.get('input[name="last_name"]').type(data.LastName)
            cy.get('input[name="email"]').type(data.Email)
            cy.get('textarea[name="message"]').type(data.Comments)
            cy.get('input[type="reset"]').click()
            cy.get('input[name="first_name"]').should('have.text','')
        })

    })

    it('verify the functionality for sign - up form', () => {
        cy.fixture('user').then(function (data) {
            cy.log(data)

            data.email = "chinmay.com"
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.FirstName)
            cy.get('input[name="last_name"]').type(data.LastName)
            cy.get('input[name="email"]').type(data.Email)
            cy.get('textarea[name="message"]').type(data.Comments)
            cy.get('input[type="submit"]').click()
            //cy.get('input[name="first_name"]').should('have.text','')
            cy.get('body').should('contain',"Error:")
        })

    })

    it('verify the contact url',function(){

        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('h2[name="contactme"]').should('have.text','CONTACT US')
    })



})