describe('validating IRCTC booking ', () => {
    before('visiting URL', () => {
        cy.visit('/')
    })
    it('validating windows Alerts', () => {
        cy.window().then(el => {
            let ale = el.alert()
            cy.get('.btn').click()
            expect(ale).to.eq(true)

            // cy.get('input[aria-autocomplete="list"]').first().type('surat')
            // cy.get('[role="listbox"]>li').each((el) => {
            //     let station = el.text()
            //     if (station == 'SURAT - ST') {
            //         el.click()
            //     }
            // })

            // cy.get('input[aria-autocomplete="list"]').last().type('mathura')
            // cy.get('[role="listbox"]>li').each((el) => {
            //     let station = el.text()
            //     if (station == 'MATHURA JN - MTJ') {
            //         el.click()
            //     }
            // })

        })
    })
    it('', () => {
        cy.get('input[aria-autocomplete="list"]').first().clear().type('surat')
        cy.get('[role="listbox"]>li').each((el) => {
            let station = el.text()
            if (station == 'SURAT - ST') {
                cy.wrap(el).click()
            }
        })
    })
    it(' ', () => {
        cy.get('input[aria-autocomplete="list"]').last().type('mathura')
        cy.get('[role="listbox"]>li').each((el) => {
            let station = el.text()
            if (station == 'MATHURA JN - MTJ') {
                cy.wrap(el).click()
            }
        })
    })



    // it('finding train by giving inputs',()=>{
    //     cy.get('input[aria-autocomplete="list"]').first().type('pune').then((res)=>{
    //             let stationName = res.text()
    //             if(stationName == 'PUNE JN - PUNE'){
    //                 cy.contains()
    //             }
    //     })
    // })
})







// describe('verifying irctc site',()=>{
//     it('irctc ticketing website',()=>{
//         cy.visit('https://www.irctc.co.in/nget/train-search')
//         cy.get('button[class="btn btn-primary"]').click()
//         cy.get('input[aria-autocomplete="list"]').first().clear().type('pun')
//         cy.get('li[role="option"]').each((el,index)=>{
//              if(el.text()=='PUNE JN - PUNE'){
//                  cy.wrap(el).click()
//              }
//         })
//         cy.get('input[aria-autocomplete="list"]').last().clear().type('tir')
//         cy.get('li[role="option"]').each((el,index)=>{
//              if(el.text()=='TIRUPATI - TPTY'){
//                  cy.wrap(el).click()
//              }
//         })
//         // cy.get('input[type="text"]').eq(3)
//         // cy.get('a[class="ui-state-default ng-tns-c59-66 ng-star-inserted"]').first().click()
//         cy.get('button[label="Find Trains"]').click()
//         cy.wait(20000)
//         cy.get('table[class="ng-tns-c80-42"]').find('td').should('have.length',4)
//     })

// })