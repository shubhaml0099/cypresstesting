

// --------->> ---  API  ----<<----------  //
// describe and validating four basic API   //

// we using demo API module, require url=https://reqres.in/  //


describe('verify all API responce',()=>{
    it('verify GET api responce',()=>{
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users?page=2'
        }).then(function(responce){
            //cy.log(responce)
            //expect(responce.status).to.eq(200)
            expect(responce.body).to.have.property('page')
        })
    })
    it('verify POST api responce',()=>{
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users',
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        
        }).then(function(responce){
            cy.log(responce)
           expect(responce.status).to.eq(201)
        })
    })

    it('verify PUT api responce',()=>{
        cy.request({
            method:'PUT',
            url:'https://reqres.in/api/users/2',
            body:{
                "name":"shubham langote",
                "job":"testar"
            }
             
        }).then(function(responce){
            cy.log(responce)
            expect(responce.status).to.eq(200)
            return
        })
    })

    it('verify the DELETE api responce',()=>{
        cy.request({
            method:'DELETE',
            url:'https://reqres.in/api/users/2'

        })
        .then(function(responce){
            expect(responce.status).to.equal(204)
        })
    })

    it('verify the PATCH api responce',()=>{
        cy.request({
            method:'PATCH',
            url:'https://reqres.in/api/users/2',
            body:{
                
                    "name": "morpheus",
                    "job": "zion resident"
                
            }
        }).then(function(responce){
            cy.log(responce)
            expect(responce.status).to.eq(200)
        })
    })
})


//  format of API hits


// describe('test scenario',()=>{
//     it('test case ',()=>{
//         cy.request({
//             method:'POST,GET,UPDATE,DELETE',
//             url:'url',
//             body:{
//                 'body require for :POST and :UPT request'
//             }
//         }).then(function(responce){
//             cy.log(responce)
//             exist(responce.status).to.eq('status value')
//         }) 
//     })
// })









// describe('validating the four basic api', () => {

//     it('validate the GET request', () => {
//         cy.request({
//             method: "GET",
//             url: "https://reqres.in/api/users?page=1"
//         })
//             .then(function (response) {

//                 expect(response.status).to.eq(200)

//             })

//     })


//     it('validate the POST request', () => {
//         cy.request({
//             method: "POST",
//             url: "https://reqres.in/api/user",
//             body: {
//                 "name": "chinmay",
//                 "job": "manual tester"
//             }

//         }).then(function (response) {
//             expect(response.status).to.eq(201)
//         })

//     })

//     it('validate the DELETE request', () => {

//         cy.request({
//             method: "DELETE",
//             url: "https://reqres.in/api/user/2",

//         }).then(function (response) {
//             expect(response.status).to.eq(204)
//         })

//     })


//     it('validate the PUT request', () => {

//         cy.request({
//             method: "PUT",
//             url: "https://reqres.in/api/user/2",
//             body: {
//                 "name": "chinmay D",
//                 "job": "manual tester"
//             }

//         }).then(function (response) {
//             expect(response.status).to.eq(200)
//         })

//     })
// })
