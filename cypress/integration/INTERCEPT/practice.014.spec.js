

// intercept practice 014intercept.spec.js file
describe('verify the button api by XHR request',()=>{
    it('verify the GET request',()=>{
        cy.request({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).then((responce)=>{
           // cy.log(responce)
            let text = responce.body.body
            return text
        }).then((text)=>{
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.get('button[class="network-btn btn btn-primary"]').click()
            cy.wait(3000)
            cy.get('div[class="network-comment"]').then((el)=>{
                expect(el.text()).to.equal(text)
            })
        })
    })
    it('verify the POST request',()=>{
        cy.request({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments",
            body:{
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
                "id": 501
              }
        }).then((responce)=>{
            cy.log(responce)
            let text = responce.body.status
        }).then(()=>{
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.contains('Post Comment').click()
            cy.wait(2000)
            cy.contains('POST successful!')

        })
    })
    it('verify the PUT request',()=>{
        cy.request({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1",
            body:{
                "name": "Using PUT in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
                "id": 1
              }
        }).then((responce)=>{
            cy.log(responce)
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.contains('Update Comment').click()
            
        })

    })
})