

import testCase1 from "../../pom/project1/tc1";
import utilities from "../../utility/utilities";  //object
import assertFunc from "../../utility/assertion";  // class
let obj = new assertFunc();   //object for class
let tcObj = new testCase1();

describe('use of utilities and utility functions', () => {
    it("test case 1-Home Page with three Sliders only", () => {
        obj.visitApp('http://practice.automationtesting.in/');
        tcObj.clickEl('#menu-icon', 0)
        tcObj.clickEl(tcObj.shopEl, 0)
        tcObj.clickEl(tcObj.homeEl, 0)
        obj.verifyLength(tcObj.sliderEl, 3)

    })
    it("test case 1-verify the length of new arrivals", () => {
        obj.visitApp('http://practice.automationtesting.in/');
        tcObj.clickEl('#menu-icon', 0)
        obj.verifyTextContains('new arrivals')
        obj.verifytext(tcObj.newarrText, 'new arrivals')
        cy.get(tcObj.newarrText).should(utilities.haveText,'new arrivals')
        obj.verifyLength(tcObj.newArrival, 3)
    })
    it.only("test case 1-verify the only in stock products can be added to cart", () => {
        obj.visitApp('http://practice.automationtesting.in/');
       
    cy.get(tcObj.newArrel).each((el,i)=>{
    cy.get(tcObj.newArrel).eq(i).click({force: true})
            cy.get(tcObj.paraText).then(el=>{
                let paraGrapText = el.text();
                cy.log(paraGrapText)
                if(paraGrapText.includes('in stock')){
                    cy.get(tcObj.addtoCartBtn).click()
                }
                else{
                cy.go(-1)
                }
            })

        })
    })
})