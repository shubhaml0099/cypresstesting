export  class Login{

    navigate(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    }

    login(userName,password){
        cy.get('#txtUsername').type(userName)
        cy.get('#txtPassword').type(password)
        cy.get('#btnLogin').click()
        return this
    }

    validateInvalidLogin(){
        cy.get('#spanMessage').should('have.text','Invalid credentials')
        return this
    }

    validateLogoIsVisible(){
        cy.get('#divLogo').should('be.visible')
        return this
    }

    validateVisibiltyforForgotPass(){

        cy.get('a[href="/index.php/auth/requestPasswordResetCode"]')
        .should('be.visible')
        .should('have.text','Forgot your password?')
        return this
    }


}