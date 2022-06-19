

// developer account , create App , client ID secret ID 
// clientID secret ID ---- API --- token 
// token -- others API 

describe('verify the auth2.0 api', () => {

    let token = ""

    it.only('verift the api to get/generate tokan', () => {
        cy.request({
            method: "POST",
            url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
            headers: {
                Authorization: 'Basic QWJXWTh5QUdmaDYzX013bEJ0enowZGdvOHFDemM2dExlYlFzSVBnM0RESmxmdEJlU0dXTUNERDUwSVRvbkg0TmdQSTFKUnV3SWpMT0pPMjE6RUNJM0lydXcxMFROS19YaHAtLWZoLWtZa1JoYkVkY2hTdndtTVZfWnJic0xvLU9kRENsOWxrdU4xeW1BekZIcXJPOTlGR0kxMWg4YzdvNG0='
            },    
            body: { grant_type: "client_credentials" },
            form:true
        }).then((Response) => {
            cy.log(Response)
            token = Response.body.access_token
            expect(Response.status).to.eq(200)
        })

    })
    it.only('verify api to get order',()=>{ 
        cy.request({
            method:"POST",
            url:"https://api-m.sandbox.paypal.com/v2/checkout/orders",
            headers:{
                Authorization:`Bearer ${token}` 
            },
            body:{
                "intent": "CAPTURE",
                "purchase_units": [
                  {
                    "amount": {
                      "currency_code": "USD",
                      "value": "100.00"
                    }
                  }
                ]
              }
         
            
        }).then((responce)=>{
            cy.log(responce)
            expect(responce.status).to.eq(201)
        })
          
    })


})







// developer account , create App , client ID secret ID 
// clientID secret ID ---- API --- token 
// token -- others API 
// describe("verify the Outh2.0 api", () => {

//     let token = ""

//     it('verify the API to get access token', () => {

//         cy.request({
//             method: "POST",
//             url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
//             headers: {
//                 Authorization: 'Basic QVF0VmUxTFNYYWdmWXg3azZ5ek9COThQbnN4OVdsb25hcXd6czJWZnJYX1h5TWJJNHBCbzVsX19PU1lLUnN5bGJqT3VvUjNRVXE1Vy04aC06RVBhT1Q0elhIcVJFazhNNUFFdEtDdHA4RGtsZEt3SFhIUzgyMTNTZWhGQjdVdk9QeTFEeFIwN01zd2NEajEzdWlELUpHUDBIVWd6Ulc1NUo='
//             },
//             form: true,
//             body: {
//                 grant_type: 'client_credentials'
//             }

//         }).then(function (reponse) {

//             token = reponse.body.access_token

//         })

//     })

//     it('verify the API to get order api', () => {

//         cy.request({
//             method: "POST",
//             url: "https://api-m.sandbox.paypal.com/v2/checkout/orders",
//             headers: {
//                 Authorization: `Bearer ${token}`
//             },
//             body: {
//                 "intent": "CAPTURE",
//                 "purchase_units": [
//                     {
//                         "amount": {
//                             "currency_code": "USD",
//                             "value": "100.00"
//                         }
//                     }
//                 ]
//             }


//         }).then(function (reponse) {

//             expect(reponse.status).to.eq(201)

//         })

//     })






// }) 