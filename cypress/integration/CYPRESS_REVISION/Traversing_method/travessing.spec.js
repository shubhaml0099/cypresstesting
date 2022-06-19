describe('verify tranverse method',()=>{
    it('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('https://www.kesari.in/')
        cy.get('.menu-item-has-children').eq(5).should('contain','Visa')
    })

    // <h1 class = "one" id = "name" name = "nm">hello</h1>
     //.should('have.class','one')
      //.should('have.id','name')
      //.should('have.attr','name',"nm")
      //.should('have.text','hello')
      //.should('contain','hel')
      //.should('have')
    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]')
        .children()
        .first().should('have.attr','class')
    })

    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]')
        .children()
        .last().should('have.attr','class',"menu-item-has-children")
    })
    it('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]')
        .children().first().next().should('contain','Speciality')
    })



    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]')
        .children().eq(1).prev().should('contain','Group')
    })

    it('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]')
        .children().first().siblings('li[id="tailor-made-holidays"]').should('contain',"Tailormade")
    })


    ///css seletor
    // tagName
    // .one 
    // #two
    // tagName[attr = "value"]
    it('To get DOM elements that match a specific selector, use the .filter() command.',function(){
        cy.visit('https://www.kesari.in/')
        cy.get('ul[class="menu list-unstyled mb-0"]')
        .children().filter('li[id="tailor-made-holidays"]').should('contain','Tailormade')
    })
    it.only('To get descendant DOM elements of the selector, use the .find() command.',function(){
        cy.visit('https://www.kesari.in/')
        cy.get('[class="megamenu-menu tailor-made"]').children()

        
    })

    it('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
       
    })

    it('To get parent DOM element of elements, use the .parent() command.',function(){
        
    })

    it('To get parents DOM element of elements, use the .parents() command.',function(){
     

    })

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',function(){
        
    })

    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){
        
    })

    it('To get the closest ancestor DOM element, use the .closest() command.',function(){

    })

    it('To get parents DOM element of elements until other element, use the .parentsUntil() command.',function(){
        
    })



    it('verify prevUntil',()=>{

       

    })






    // <h1 id = "ad" class = "dd">text</h1>

    //next(),siblings(),nextAll(),prevAll(),prev(),.prevUntil(),nextUtil()


   

    // next() , prev() , siblings() , nextAll(), prevAll()
    // Testing --- actual vs expected

    // <li>Apple</li>
    // <li>Banana</li>
    // <li>Grapes</li>
    // <li>Water Melon</li>

    






})