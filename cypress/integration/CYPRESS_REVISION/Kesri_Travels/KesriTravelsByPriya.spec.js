
//import utilities from "../../utility/utilities"
import {methods} from "../Kesri_Travels/../../../support/KesriTravelsByPriya"


// validate the nav bar with fixture
// validate the url for each nav
// based on date selection validate the number of tours in each state
// validate text of blink element
// validate search dynamic dropdown


describe('To test functionalities of kesari tours', () => {
    let obj = new methods()
    beforeEach(() => {
        cy.visit('https://www.kesari.in/')
    })

    it('TC-01 To validate the nav bar with fixture', () => {
        cy.fixture('testData').then(function (testData) {
            cy.log(testData)
            cy.get('#main-menu').find('ul:first').children().each((el, index) => {
                let text = el.find('a:first').text()
                cy.log(text)
                cy.wrap(text).should('contain', testData[index])
            })

        })
    })

    it('TC-02 To validate the url for each nav', () => {
        obj.click('a[ui-sref="group({})"]')
        obj.verifyUrl('/Group-Tours')
        obj.clickMe('a[href="/Speciality-Tours"]', 0)
        obj.verifyUrl('/Speciality-Tours')
        obj.clickMe('a[href="/Speciality-Tours/Low-Price-Tours"]', 0)
        obj.verifyUrl('/Speciality-Tours/Low-Price-Tours')
        obj.clickMe('a[href="/Tailor-Made"]', 0)
        obj.verifyUrl('/Tailor-Made')
        obj.clickMe('a[href="/kesari-forex"]', 0)
        obj.verifyUrl('/kesari-forex')
        obj.click('a[href="/visa"]')
        obj.verifyUrl('/visa')
        obj.clickMe('a[href="/cruises"]', 0)
        obj.verifyUrl('/cruises')
        obj.clickMe('a[href="/Deals"]', 0)
        obj.verifyUrl('/Deals')
        obj.clickMe('a[href="/Deals"]', 1)
        obj.verifyUrl('/Deals')
        obj.clickMe('a[href="/About-Us"]', 0)
        obj.verifyUrl('/About-Us')
    })

    it('TC-03 To validate text of blink element', () => {
        obj.click('a[ui-sref="group({})"]')
        obj.verifyVisible('span[class="blink_me_text"]')
        cy.get('span[class="blink_me_text"]').invoke('removeAttr', 'class').should('contain', 'Destination Options')
    })

    it('TC-04 To validate search dynamic dropdown', () => {
        cy.get('input[type="text"]').eq(0).clear().type('Goa')
        cy.get('.search-row__tour-details >div >span').each((el, index) => {
            let destination = el.text()
            cy.log(destination)
            if (destination.includes('WITH LAKSHADWEEP CRUISE')) {
                cy.wrap(el).click();
                obj.verifyVisible('.btn-low-price-text.ng-binding')
            }
        })

    })

    it('TC-05 based on date selection validate the number of tours in each state', () => {
        obj.click('a[ui-sref="group({})"]')
        obj.clickMe('label[class="ng-binding"]', 0)
        cy.get('#tour-detail-div > div').each((el) => {
            cy.wrap(el).should('contain', el.text())

        })

    })
    it.only('Validate the each tab link', () => {
        cy.visit('https://www.kesari.in/')
        cy.get('.menu-item-has-children > a').each((el) => {
            cy.request(el.prop('href')).its("status").should("eq", 200)
            cy.log
        })
    })
})