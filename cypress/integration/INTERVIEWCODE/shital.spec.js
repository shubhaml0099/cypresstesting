describe('to validate the train available',()=>{
    it('book ticket',()=>{
        cy.visit('https://www.irctc.co.in/nget/train-search')
        cy.contains('OK').first().click()
        cy.get('input[role="searchbox"]').first().type('HAR')
        cy.get('ul[role="listbox"]').find('li').each(el=>{
            let station =el.text()
            //cy.log(station)
            // if(station==='HYDERABAD DECAN - HYB'){
                if(station==='HARIDWAR JN - HW'){

                cy.wrap(el).click()

            }
        })

        cy.get('input[role="searchbox"]').last().type('MUMB')
        cy.get('ul[role="listbox"]').find('li').each(el=>{
            let reach_station =el.text()
            //cy.log(station)
            // if(station==='MUMBAI CENTRAL - MMCT'){
                if(reach_station==='MUMBAI CENTRAL - MMCT'){

                cy.wrap(el).click()

            }
        })
        var count=0
        cy.contains(/^Search/).click()
        // cy.get('input[role="searchbox"]').last().type('')
cy.get('div[class="form-group no-pad col-xs-12 bull-back border-all"]').each((el,index)=>{
    if(index <= count){
    count +=1
    }
    //cy.log(count)

}).then(()=>{
    expect(count).to.eq(1)
})

    })
})