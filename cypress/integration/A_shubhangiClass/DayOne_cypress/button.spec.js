

//  Button click  // Select tacle action // Enter key 

describe('verify button click ',()=>{
    it('verify button action ',()=>{
        cy.visit('https://demoqa.com/buttons')
        cy.get('button[id="doubleClickBtn"]').dblclick()
        cy.get('p[id="doubleClickMessage"]').should('be.visible').and('contain','You have done a double click')
        cy.get('button[id="rightClickBtn"]').rightclick()
        cy.get('p[id="rightClickMessage"]').should('be.visible').and('contain','You have done a right click')
    })
    it('verify the text input',()=>{
        cy.visit('https://demoqa.com/buttons')
        cy.get('ul[class="menu-list"]').children().first().click()
        cy.get('input[id="userName"]').clear().type('shubham')
        cy.get('input[id="userEmail"]').click().type('shubham@gmail.com')
        cy.get('textarea[id="currentAddress"]').clear().type('hello')
        cy.get('textarea[id="permanentAddress"]').click().type('hello india')
        cy.get('button[id="submit"]').click()


        cy.get('#name').then((el)=>{
            let shub = el.text()
            expect(shub).to.eq('Name:shubham')
            expect(shub).to.contains('shubham')
        })
    })
    it('to verify select table action',()=>{
        cy.visit('https://demoqa.com/selectable')

        cy.get('ul[id="verticalListContainer"] li').as('shub')
        cy.get('@shub').each((el,index)=>{
            cy.wrap(el).as('list')
            cy.get('@list').click()
            cy.get('@list').should('have.class','mt-2 list-group-item active list-group-item-action')

        })
    })

    it.only('To verify search box action and press inter key',()=>{
        cy.visit('https://www.ebay.com/n/all-categories#ebay-motors')
        cy.get('input[id="gh-ac"]').type('toys {enter}')
        //cy.get('select[id="gh-cat"] option').type('toy {enter}')
    })

})