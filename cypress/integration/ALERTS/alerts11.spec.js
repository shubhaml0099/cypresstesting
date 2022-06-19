describe('validate windows Alerts',()=>{
    beforeEach('visit',()=>{
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
    })
    it('validate windows normal alerts',()=>{
        cy.on('window:alert',(res )=>{
            expect(res).to.eq('I am an alert box!')
            return true
        })
        cy.get('[id="button1"]').click()
        
    })
}) 