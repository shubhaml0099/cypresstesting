describe('registration on juce shop app',()=>{
    it('create user name and passwad',()=>{
        cy.visit('http://localhost:3000/#/register')
        cy.get('[id="emailControl"]').type('Shubhamlangote0099@gmail.com',{force: true})
        cy.get('.close-dialog > .mat-button-wrapper > span').click()
        cy.get('[id="passwordControl"]').type('Shubham@0099')
        cy.get('[id="repeatPasswordControl"]').type('Shubham@0099')
        cy.get('[type="checkbox"]').click({force: true})
        cy.get('div[class="mat-select-arrow-wrapper ng-tns-c130-11"]').click()
        cy.wait(3000)
        cy.get('div[role="listbox"]').find('mat-option').each((el)=>{
            //cy.log(el.text())
            if(el.text()==" Mother's maiden name? "){
                cy.wrap(el).click({force:true})
            }
        })
        cy.get('[id="securityAnswerControl"]').type('Mohan',{force: true})
        cy.get('button[id="registerButton"]').click({force:true})
        cy.wait(4000)
        cy.contains('div[class="error"]').should('have.text','Email must be unique')  // problem element is not getting 
    })
})