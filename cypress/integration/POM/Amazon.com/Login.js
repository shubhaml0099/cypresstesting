export class Login {
    element = {
        MainUrl: "https://www.amazon.in/",
        SinInNavigation: '[id = "nav-link-accountList"]',
        Email: 'input[type = "email"]',
        Password: 'input[type = "password"]',
        ContinueButton: 'input[id = "continue"]',
        SignInBUtton: 'input[id = "signInSubmit"]'

    }

    Visit() {
        cy.visit(this.element.MainUrl)
    }
    LoginValidateInput(USERNAME, PASSWORD) {
        cy.get(this.element.SinInNavigation).click()
        cy.get(this.element.Email).type(USERNAME)
        cy.get(this.element.ContinueButton).click()
        cy.get(this.element.Password).type(PASSWORD)
        cy.get(this.element.SignInBUtton).click()

        return this
    }
    Logo(){
        cy.get('#nav-logo').should('have.text','Amazon')
    }
}