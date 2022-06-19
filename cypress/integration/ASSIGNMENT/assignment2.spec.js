// Test Scenario 1:
// 1. Open the https://www.lambdatest.com/selenium-playground page and
// click “Drag & Drop Sliders” under “Progress Bars & Sliders”.
// 2. Select the slider “Default value 15” and drag the bar to make it 95 by
// validating whether the range value shows 95 as required using mouse
// click events of CypressIO.





describe('validating the slider bar',()=>{
    it('select slider bar and make it 15 to 95 by using mouse events',function(){
        cy.visit('https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo')
        //cy.get('div[class="sp__range sp__range-success"]').trigger('mouseenter').trigger('mousemove')
        cy.get("#rangeSuccess").invoke('val','95')//.trigger('chenge')
        cy.get('[id="rangeSuccess"]').should('have.value','95')

    })
    //it('')
})




// describe('validating the slider bar',()=>{
//     it('select slider bar and make it 15 to 95 by using mouse events',function(){
//         cy.visit('https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo')
//         cy.get("#rangeSuccess").invoke('val','95')
//         cy.get('[id="rangeSuccess"]').should('have.value','95')

//     })
// })