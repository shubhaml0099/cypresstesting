///<referance type = "cypress"/>
// intercept api 
///<reference types="cypress"/>
describe('verify the get request', () => {
    it('verify the get request', () => {
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1",
        }).then((responce) => {
            //cy.log(responce)
            let text = responce.body.body
            return text
        }).then((text) => {
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.contains('Get Comment').click()
            cy.wait(2000)
            cy.get('.network-comment').then((el) => {
                expect(el.text()).to.equal(text)
            })
        })
    })
    it('verify the post request', () => {
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments",
            body: {
                "name": " Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then((res) => {
            let text2 = res.body
            return text2
        }).then((text2) => {
            cy.visit("https://example.cypress.io/commands/network-requests")
            cy.contains('Post Comment').click()
            cy.contains('POST successful!')
        })
    })
    it('verify the put request', () => {
        cy.request({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1",
            body: {
                "name": "Using PUT in cy.intercept()",
                "email": "hello@cypress.io",
                "body": " You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then((res2) => {
            cy.visit("https://example.cypress.io/commands/network-requests")
            cy.contains('Update Comment').click()

        })
    })
})

//// shubham keche code
// ///<reference types="cypress"/>
// describe('verify the get request', () => {
//     it('verify the get request', () => {
//         cy.request({
//             method: "GET",
//             url: "https://jsonplaceholder.cypress.io/comments/1"

//         }).then(function (res) {
//             let text = res.body.body
//             return text
//         }).then(function (text) {
//             cy.visit('https://example.cypress.io/commands/network-requests')
//             cy.contains('Get Comment').click()                              // contains used for
//             cy.wait(2000)
//             cy.get('.network-comment').then(function (el) {
//                 expect(el.text()).to.equal(text)
//             })
//         })
//     })

//     it('verify the post request', () => {
//         cy.request({
//             method: "POST",
//             url: 'https://jsonplaceholder.cypress.io/comments',
//             body: {
//                 "name": "Using POST in cy.intercept()",
//                 "email": "hello@cypress.io",
//                 "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
//             }
//         }).then(function (res) {
//             let text2 = res.body
//         }).then(function (text2) {
//             cy.visit('https://example.cypress.io/commands/network-requests')
//             cy.contains('Post Comment').click()
//             cy.wait(2000)
//             cy.contains('POST successful!')

//         })
//     })
// })
// it('verify the update request', () => {
//     cy.request({
//         method: "PUT",
//         url: 'https://jsonplaceholder.cypress.io/comments/1',
//         body: {
//             "name": "Using PUT in cy.intercept()",
//             "email": "hello@cypress.io",
//             "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
//         }
//     }).then(function (res) {
//         cy.log(res)
//         cy.visit('https://example.cypress.io/commands/network-requests')
//         cy.contains('Update Comment').click()

//     })

// })





////  chinmay code

// describe('verify the get request',()=>{
//     it('validate the get request ',()=>{

//         cy.request({
//             method:"GET",
//             url:"https://jsonplaceholder.cypress.io/comments/1"


//         }).then((res)=>{
//             let text = res.body.body
//             return text

//         }).then(function(text){

//             cy.visit('https://example.cypress.io/commands/network-requests ')
//             cy.contains('Get Comment').click()
//             cy.wait(2000)
//             cy.get('.network-comment').then(function(el){

//                 expect(el.text()).to.equal(text)

//             })

//         })

//     })


// })