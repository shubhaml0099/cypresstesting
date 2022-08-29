

describe('Booking Hotel Room On Goibibo Hotile site',()=>{
    before('error',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        
    })
    it('Book Hotel Room ',()=>{
        cy.visit('https://www.goibibo.com/')
        // cy.get('ul[class="happy-nav"]').then(el=>{
        //     cy.log(el)
        // })
        cy.get(':nth-child(2) > .nav-link').click()
        
        //#root > div > div.sc-xayxd-0.kOmJSj > div > header > ul > li:nth-child(2) > a
        //<a href="/hotels/" target="_self" class="nav-link ."><span class="header-sprite nav-icon-hotels gr-append-right5"></span>Hotels</a>
    })
})