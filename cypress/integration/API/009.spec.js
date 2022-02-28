

describe('validate the post api',function(){

    it('validate the GET api and count the number of user',()=>{

        cy.request({
            method:'GET',
            url:"https://reqres.in/api/users?page=2"
        }).then(function(response){
            cy.log(response)
            expect(response.body.per_page).to.eq(response.body.data.length)
            //expect(response['body']['per_page']).to.eq(response['body']['data'].length)
        })


    })
    it.only('validate the GET api and count somthing',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/unknown/2"
        
        }).then(function(responce){
            cy.log(responce)
            expect(responce.requestHeaders.Connection).to.eq("keep-alive")
        })
    })
    it.only('validating the properties of multiple user',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        })
        .then(function(responce){
            cy.log(responce)
            responce.body.data.forEach(element => {
                // expect(element).to.have.property("email")
                // expect(element).to.have.property("first_name")
                expect(element).to.have.all.keys('id','email','first_name','last_name','avatar');
                //cy.log(element)
            });
            expect(responce.body.data[2].id).to.eq(9)
            return 
        })
    })

    it.only('validate the responce body for user create API ',()=>{
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/register",
            body:{
                
                    "email": "eve.holt@reqres.in",
                    "password": "pistol"
            
            }
        }).then(function(responce){
            cy.log(responce)
            expect(responce.status).to.equal(200)
            expect(responce.duration).to.be.within(1000,2000)
        })
    })

    // it.only('validate the properties for multiple users',()=>{

    //     cy.request({
    //         method:'GET',
    //         url:"https://reqres.in/api/users?page=2"
    //     }).then(function(response){

    //         response.body.data.forEach(element => {
    //             // expect(element).to.have.property('email')
    //             // expect(element).to.have.property('last_name')
    //             // expect(element).to.have.property('first_name')
    //             // expect(element).to.have.property('id')
    //             // expect(element).to.have.property('avatar')
    //             // expect(element).to.have.property(['email'])
    //             expect(element).to.have.all.keys('email', 'first_name', 'last_name', 'id','avatar');
    //         });

    //     })


    // })

    // it('validate the properties for multiple users',()=>{

    //     cy.request({
    //         method:'GET',
    //         url:"https://reqres.in/api/users?page=2"
    //     }).then(function(response){

    //         expect(response.body.data[0]['email']).to.equal('michael.lawson@reqres.in')    
    //     })


    // })

    // it.only('validate the reponse body for usercreate api',()=>{

    //     cy.request({
    //         method:'POST',
    //         url:"https://reqres.in/api/users",
    //         body:{
    //             "name": "morpheus",
    //             "job": "leader"
    //         }
    //     }).then(function(response){
    //       expect(response.status).to.eq(201)
    //       expect(response.body).to.have.all.keys('id','name','job','createdAt');
    //       expect(response.duration).to.be.within(300, 500)

    //     })


    // })

})










