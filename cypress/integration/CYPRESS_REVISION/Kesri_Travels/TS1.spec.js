

describe('validate the nav bar with fixture', () => {
    before(() => {
        cy.visit('https://www.kesari.in/Group-Tours')
    })
    it('validate navigation bar ', () => {
        cy.get('#main-menu>ul').children().should('have.length', 11)
        cy.get('#main-menu>ul').children().first().should('have.contain', 'Group')

    })

    // following code is given by krishna  

    it.only('validate url for each navigate bar', () => {
        cy.visit('https://www.kesari.in/')
        cy.get('.menu-item-has-children > a').each((el) => {
            let kk = el.attr("href")
            if (!(kk.includes("void(0)"))) if (((el.prop("target")) != "_blank")) {
                cy.visit(`https://www.kesari.in${kk}`).then(() => {
                    cy.url().should('contain', kk)
                })
            } else {
                cy.log(kk, "different base domain")
            }

        })
    })
    // it('validate url for each navigate bar', () => {
    //     let url = ['Group-Tours', 'Speciality-Tours', 'Low-Price-Tours', 'Tailor-Made', 'http://www.kesarimice.in/', 'http://www.kesarimice.in/', 'https://www.kesari.in/visa', 'https://www.kesari.in/cruises', 'https://www.kesari.in/Deals', 'https://www.kesari.in/search/ss']
    //     cy.get('#main-menu>ul>li>a').each((el, index, arr) => {
    //         cy.wrap(el).click().url().should('contain', url[index])

    //     })
    // })

    it('validate the Dynamic Drope Down ', () => {
        cy.get('[type="text"]').first().clear().type('Goa')
        cy.get('[class="dropdown-menu ng-isolate-scope"]').children().each((el)=>{
            let select = el.text()
            if(select.includes(' WITH LAKSHADWEEP CRUISE')){
                cy.wrap(el).click()
                cy.url().should('be.contain','GOA-WITH-LAKSHADWEEP-CRUISE')
            }
            
        })
    })
    
 

})
