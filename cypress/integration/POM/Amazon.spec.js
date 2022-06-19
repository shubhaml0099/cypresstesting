

// POM for Amazon login 

import { Amazon } from "../../support/POM_Amazon";


describe('Amazon login with credential',()=>{
    
    let Amaz = new Amazon

    it('Amazon login with valide credential',()=>{
        cy.visit("https://www.amazon.in/")
        Amaz.login("shubhamlangote0099@gmail.com","Shubham123@")
    })
})
