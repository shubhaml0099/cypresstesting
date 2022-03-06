

//// graphql --- query -- mutation ---- varibles


describe('verify the graphql respnse',()=>{


    it('verify the todos on ui',()=>{
        cy.intercept('POST','http://localhost:3000/').as('getAllToDo')
        cy.visit('/')
        cy.wait('@getAllToDo').then(function({response}){
            //cy.log(response)
            let array =response.body.data.allTodos
            cy.log(array)
            cy.get('label').each(function(el,index){
                
                expect(el.text()).to.eq(array[index]['title'])
            })
        })

    })

    it('verify the todos on ui',()=>{
        //cy.intercept('POST','http://localhost:3000/').as('getAllToDo')
        cy.intercept({
            method: 'POST',
            url: '/',
            headers: {
              'x-gql-operation-name': 'allTodos',
            }
          }).as('allTodos')
        cy.visit('/')
        cy.get('[type= "checkbox"]').each(function(el){
            cy.wrap(el).check()
        })
        cy.reload()
        cy.wait('@allTodos').then(function({response}){
            let array =response.body.data.allTodos
            array.forEach(element => {
                expect(element.completed).to.be.true
                
            });

        })

    })

    it('verify the todos on ui',()=>{
        //cy.intercept('POST','http://localhost:3000/').as('getAllToDo')
        cy.intercept({
            method: 'POST',
            url: '/',
            headers: {
              'x-gql-operation-name': 'allTodos',
            },
          }).as('allTodos')
        cy.visit('/')

        cy.get('[type= "checkbox"]').each(function(el){
            cy.wrap(el).uncheck()
            
        })
        cy.reload()
        
        cy.wait('@allTodos').then(function({response}){
            let array =response.body.data.allTodos
            array.forEach(element => {
                expect(element.completed).to.be.false
                
            });

        })
      

    })

       




})