

// inter button // navigation verification by logic

describe('verify the serch function ', () => {
    it('verify the search functionaity', () => {
        cy.visit('/')
        cy.get('#searchTerm').type('hello{enter}')
        cy.get('h2').should('have.text', 'Search Results:')
    })

    it('verify the navigation function', () => {
        cy.visit('/')
        let nav = ["Home", "Online Banking", "Feedback"]
        let url = ["index.html", "online-banking.html", "feedback.html"]

        nav.forEach((el, index) => {
            cy.contains(el).click()
            cy.url().should('contain', url[index])
        })
    })
    it('validate feedback form', () => {
        cy.get('#feedback-title').click()
        cy.get('#name').type('username')
        cy.get('#email').type('shubham@gmail.com')
        cy.get('#subject').type('validate feedback ')
        cy.get('#comment').type('hello')
        cy.get('[class="btn-signin btn btn-primary"]').click()
        cy.url().should('contain', 'sendFeedback.htm')
        cy.get('[class="brand"]').should('be.visible')
        cy.get('.container > :nth-child(1) > :nth-child(2) > ul > li').should('be.visible')

    })
    // shortest method 
    it('validate feed back ',()=>{
        cy.fixture("zerobank").then((data)=>{
            for(let key in data){
                cy.get(`#${key}`).type(data[key])
                cy.get('[class="btn-signin btn btn-primary"]').click()
                cy.url().should('contain', 'sendFeedback.htm')
            }
        })
    })

    it.only('validate the feedback form', () => {
        cy.fixture("example").then((formData) => {

            for (let key in formData) {
                cy.get(`#${key}`).type(formData[key])
            }

            // cy.get('#name').type(formData.name)
            // cy.get('#email').type(formData.email)
            // cy.get('#subject').type(formData.subject)
            // cy.get('#comment').type(formData.comment)
            cy.get('input[name="submit"]').click()
            cy.get('#feedback-title').should('be.visible')
        })
    })

})
