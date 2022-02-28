

// export class support {
//     keys = {
//         fullName:"undefined",
//         LastName:"undefined",
//         Age:"undefined"
//     }
//     Biodata(fullName,LastName){
//         (this.keys.fullName)
//         (this.keys.LastName)
//     }
// }

export class homepage {
    elements = {
        Username: '#divUsername',
        Password: '#divPassword',
        Button: '#btnLogin',
        forgotpasward: '#forgotPasswordLink > a',
        Logo: '#divLogo > img',
        socialicon: '#social-icons',
        quiclunchpanal: "#panel_resizable_0_0",


    }
    // all elementwith css selector now we creat function 

    ValidateLogin(username, pasward) {
        cy.get(this.elements.Username).type(username)
        cy.get(this.elements.Password).type(pasward)
        cy.get(this.elements.Button).click()

    }
    validatelogo() {
        cy.get(this.elements.Logo).should('be.visible')
    }
    ValidateForgotpasward() {
        cy.get(this.elements.forgotpasward).click()
        cy.url().should('include', 'auth/requestPasswordResetCode')
    }
    ValidateSocialicon() {
        cy.get(this.elements.socialicon).children().should('have.length', '4')
    }
    // validateDashbordLunch() {
    //     cy.get(this.elements.quiclunchpanal).find('tbody').children().should('have.length', '7')
    // }

}