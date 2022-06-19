import minskole from "../../../support/POM_shubhangi1"
let myObj = new minskole();

describe('pom',()=>{

    it("pom demo",()=>{
        myObj.visitApp()
        cy.get(myObj.electricityBill)
    })

    it("with Parameters",()=>{
      myObj.visitWithParameters('https://www.amazon.in/',"electricity")

    })
    
})