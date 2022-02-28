

// calender code chinmay sir take

describe('Describe and verify functionality of calender',()=>{
    it('verify calender functionality',()=>{
        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').first().click()
        let date = new Date()

        date.setDate(date.getDate()+500)
        let year = date.getFullYear()
        let month = date.getMonth()
        let day = date.getDate()
        let textMonth = date.toLocaleString('default',{month:'short'})

        function monthYear(){
            cy.get('.datepicker-switch').eq(0).then(function(el){
                if(!el.text().include(textMonth)){
                    cy.get('.next').eq(0).click()
                    monthYear()
                }
            })
        }
        monthYear()
    }).then(()=>{
        cy.get('')
    })
})