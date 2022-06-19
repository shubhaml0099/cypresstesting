

// kesri travels utility

 export class methods{
    visitApp(url){
        cy.visit(url)
    }
    click(el){
        cy.get(el).click({multiple:true})
    }
    clickMe(el,index){
        cy.get(el).eq(index).click({force:true})
    }
    verifyText(element,expextedText){
        cy.get(element).should('have.text',expextedText)
    }
    verifyIndexText(element,index,expextedText){
        cy.get(element).eq(index).should('have.text',expextedText)
    }
    verifyLength(element,expectedLength){
        cy.get(element).should('have.length',expectedLength)
    }
    verifyIndexLength(element,index,expectedLength){
        cy.get(element).eq(index).should('have.length',expectedLength)
    }
    containText(element,text){
        cy.get(element).should('contain',text)
    }
    verifyUrl(expurl){
        cy.url().should('contain',expurl)
    }
    containIndexText(element,index,text){
        cy.get(element).eq(index).should('contain',text)
    }
    verifyExplicitText1(element,text){
        cy.get(element).then((el)=>{
            expect(el.text()).to.equals(text)
        })
    }
    verifyExplicitText(element,text){
        cy.get(element).each((el)=>{
            expect(el.text()).to.equals(text)
        })
    }
    verifyTitle(expectedTitle){
        cy.title().should('have.text',expectedTitle)
    }
    verifyTextContains(text){
        cy.contains(text)
    }
    includesText(element,expText){
        cy.get(element).should('have.text',expText)
    }
    verifyVisible(element){
        cy.get(element).should('be.visible')
    }
}

// export default methods;