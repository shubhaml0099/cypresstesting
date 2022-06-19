
export class Amazon{
    elements = {
         url :"https://www.amazon.in/",
        signin:'#nav-link-accountList',
        email:'input[type="email"]',
        continue:'input[id="continue"]',
        password:'input[type="password"]',
        signinbtn:'input[id="signInSubmit"]'

    }

    login(id,pass){
       // cy.get(this.elements.url).click()
        cy.get(this.elements.signin).click()
        cy.get(this.elements.email).type(id)
        cy.get(this.elements.continue).click()
        cy.get(this.elements.password).type(pass)
        cy.get(this.elements.signinbtn).click()

    }
}