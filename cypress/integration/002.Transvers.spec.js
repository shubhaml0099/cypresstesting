
// tranverse method ---------->>----


describe('transversan method in cypress', () => {
    it('to get childran by DOM element, use the .childran() command', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length', 5)
    })
    it('to get childran by DOM element,by specific index to use .eq() command', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(4).should('have.text', 'Sugar')
    })
    it('to get first DOM element within element,by useing .first() command', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().first().should('have.text', 'Coffee')
    })
    it('to get last DOM element within element,by useing .last() command', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().last().should('have.text', 'Sugar')
    })
    it('to get the next sibling within DOM element,by using .next() command', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id="milk"]').next().should('have.attr', 'id', 'espresso')
    })
    it('to get all of next sibling DOM elements within elements,use the .nextAll()', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').nextAll().should('have.length', 3)
    })
    it('to get all of the next sibling DOM elements within elements until another elements, use the .nextUntil() command', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').nextUntil('#sugar').should('have.length', 2)
    })
    it('to get prev DOM elements within elementa,use the .prev() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').prev().should('have.attr', 'id')
    })
    it('to get previous all elements in DOM elements,use the .prevAll() command', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevAll().should('have.length', 4)
    })
    it('to get previous all elements in DOM elements until another elements,use the .prevAll() command', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevUntil('#milk').should('have.length', 1)
    })
    it('to get sibling of elements in DOM elements,use the .sibling() command', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').siblings().should('have.length', 4)
    })
    it('To get descendant DOM elements of the selector, use the .find() command', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('nav[aria-label="breadcrumb"]').find('ol').find('li').should('have.length',3)
    })

   it('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').find('li').filter('.espresso').should('have.length',0)
    })

    it('to get parent element of DOM element,use the .parent() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').parent().should('have.attr','class','traversal-drinks-list')
    })
    it('To get parants element of DOM elements,use .parsents() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').parents().should('have.length',6)
    })
    it('To get parants element of DOM elements,use .parsentsUntill() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.navbar-fixed-top').parentsUntil('.navbar navbar-inverse navbar-fixed-top').should('have.length',2)
    })
    it.only('To get closest element of DIM elements,use .closest() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.sales').closest('ul').should('have.attr','class','menu')
        cy.get('.sales').closest('div').should('have.attr','class','thumbnail')
//The closest() method starts at the element itself, then the anchestors (parent, grandparent, ...) until a match is found.
       // cy.get('li[id="veggie"]').children()//.eq(3).closest('div').should('have.attr','class','thumbnail')
    })

    it('To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().not('#tea').should('have.length',4)
    })


})



/*it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('#tea').nextAll().should('have.length',3)

})

it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('#tea').nextUntil('#sugar').should('have.length',2)
})

it('To get the previous sibling DOM element within elements, use the .prev() command.',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('#espresso').prev().should('have.attr','id','milk')
})

it.only('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('#sugar').prevUntil('#coffee').should('have.length',3)
})

it.only('To get all previous sibling DOM elements within elements, use the .prevAll() command.',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('#sugar').prevAll().should('have.length',4)
})

it.only('To get all sibling DOM elements of elements, use the .siblings() command.',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('#sugar').siblings().should('have.length',4)
})




it.only('To get descendant DOM elements of the selector, use the .find() command.',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('nav[aria-label="breadcrumb"]').find('ol').find('li').should('have.length',3)
})


it.only('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.breadcrumb]').find('li').filter('.active').should('have.text','Contact Us')

})

it('To get the closest ancestor DOM element, use the .closest() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#espresso').closest('ul').should('have.attr','class','traversal-drinks-list')
    })

    it('To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)
    })

    it('To get parent DOM element of elements, use the .parent() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //cy.get('.traversal-mark').parent().contain('Random Text')
        cy.get('.traversal-mark').parent().should('have.contain','Lorem ipsum dolor sit amet, consectetur adipiscing elit')


    })  




    it('To get parents DOM element of elements, use the .parents() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //cy.get('.traversal-mark').parent().contain('Random Text')
        //cy.get('.traversal-mark').parents().should('have.class','thumbnail')
        cy.get('.traversal-mark').parents().should('have.attr','h2')

    })  


    it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')

        cy.get('.traversal-mark').parentsUntil('.thumbnail').should('have.length',2)

    })  
*/



// describe('transversan method in cypress', () => {
//     it.only('To get parants element of DOM elements,use .parsentsUntill() command.', () => {
//         cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
//         cy.get('.navbar-fixed-top').parentsUntil('.navbar navbar-inverse navbar-fixed-top').should('have.length', 2)
//     })
// })















