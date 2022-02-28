

export class homepage{
    elements = {
        Username:'#divUsername',
        Password:'#divPassword',
        Button:'#btnLogin',
        forgotpasward:'#forgotPasswordLink > a',
        Logo:'#divLogo > img',
        socialicon:'#social-icons',
       
    }
    // all elementwith css selector now we creat function 

    ValidateLogin(username,pasward){
        cy.get(this.elements.Username).type(username)
        cy.get(this.elements.Password).type(pasward)
        cy.get(this.elements.Button).click()

    }
    validatelogo(){
        cy.get(this.elements.Logo).should('be.visible')
    }
    ValidateForgotpasward(){
        cy.get(this.elements.forgotpasward).click()
        cy.url().should('include','auth/requestPasswordResetCode')
    }
    ValidateSocialicon(){
        cy.get(this.elements.socialicon).children().should('have.length','4')
    }

}


// export class HomePage {
//     element = {
//         username: '#txtUsername',
//         password: '#txtPassword',
//         loginbutton: '.button',
//         logo: '#divLogo > img',
//         forpass: '#forgotPasswordLink > a',
//         socialicon: '#social-icons'
//     }
//     Login(userName, password) {
//         cy.get(this.element.username).type(userName)
//         cy.get(this.element.password).type(password)
//         cy.get(this.element.loginbutton).click()

//     }
//     validateLogo() {
//         cy.get(this.element.logo).should('be.visible')

//     }
//     validateforpass() {
//         cy.get(this.element.forpass).click()
//         cy.url().should('include', 'requestPasswordResetCode')
//     }
//     validatesocialicon() {
//         cy.get(this.element.socialicon).children().should('have.length', 4)
//     }
// }