
describe('verify the weather check-out datefield accept later date than check in date',()=>{
    it('login in Hotel site ',()=>{
        cy.Hotel_login('shubhamlangote','cypress413304')
        cy.get('#datepick_in').clear().type('30/02/2022')
        cy.get('#datepick_out').clear().type('28/02/2022')
        cy.get('#Submit').click()
        cy.get('#checkin_span').should('have.text','Check-In Date shall be before than Check-Out Date')
    })
    it('To check if error is date field is in the past',()=>{
        cy.Hotel_login('shubhamlangote','cypress413304')
        cy.get('#datepick_in').clear().type('23/02/2022')
        cy.get('#datepick_out').clear().type('20/02/2022')
        cy.get('#Submit').click()
        cy.get('#checkin_span').should('have.text','Check-In Date shall be before than Check-Out Date')
        cy.get('#checkout_span').should('have.text','Check-Out Date shall be after than Check-In Date')
    })
    it('To verify whether locations in Select Hotel page are displayed according to the location selected in Search Hotel',()=>{
        cy.Hotel_login('shubhamlangote','cypress413304')
        cy.get('#datepick_in').clear().type('23/02/2022')
        cy.get('#datepick_out').clear().type('24/02/2022')
        cy.get('#Submit').click()
        cy.get('#location_0').should('have.attr','value','Sydney')
    })
    it(' To verify date and Check Out date are being displayed in Select Hotel Page according to the dates selected in search Hotel.',()=>{
        cy.Hotel_login('shubhamlangote','cypress413304')
        cy.get('#datepick_in').clear().type('23/02/2022')
        cy.get('#datepick_out').clear().type('24/02/2022')
        cy.get('#Submit').click()
        cy.get('#location_0').should('have.attr','value','Sydney')
        cy.get('#arr_date_0').should('have.attr','value','23/02/2022')
        cy.get('#dep_date_0').should('have.attr','value','24/02/2022')
    })
    it('To verify whether no. of rooms entry in Select Hotel page is same as the Number of rooms selected in search hotel page',()=>{
        cy.Hotel_login('shubhamlangote','cypress413304')
        cy.get('#datepick_in').clear().type('23/02/2022')
        cy.get('#datepick_out').clear().type('24/02/2022')
        cy.get('#Submit').click()
        cy.get('#rooms_0').should('have.attr','value','1 Rooms')

    })
    it('To verify whether Room Type in Select Hotel page is same as Room type selected in search hotel page',()=>{
        cy.Hotel_login('shubhamlangote','cypress413304')
        cy.get('#datepick_in').clear().type('23/02/2022')
        cy.get('#datepick_out').clear().type('24/02/2022')
        cy.get('#Submit').click()
        cy.get('#room_type_0').should('have.attr','value','Standard')
    })
    it('To verify whether Room Type in Select Hotel page is same as Room type selected in search hotel page',()=>{
        cy.Hotel_login('shubhamlangote','cypress413304')
        cy.get('#datepick_in').clear().type('23/02/2022')
        cy.get('#datepick_out').clear().type('24/02/2022')
        cy.get('#Submit').click()
        cy.get('#room_type_0').should('have.attr','value','Standard')
    })
})


