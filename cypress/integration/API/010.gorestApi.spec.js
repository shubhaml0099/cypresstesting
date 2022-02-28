// gorest API using demo api //
// BY USING BARRIER TOCAN VERIFY API //

describe('verify the gorest api', () => {
    function generateEmail() {
        let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let string = '';
        for (let ii = 0; ii < 15; ii++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string + '@gmail.com';
    }
    it('verify the user create user API ', () => {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v1/users",
            headers: {
                Authorization: "Bearer 10508461d883db15154bc3a9e1e2e46f428ef68c8d8f9d5da2d2a199d051eef9"
            },
            body: {
                "name": "Test User",
                "email": generateEmail(),
                "gender": "male",
                "status": "active"
            }
        }).then(function (response) {
            // cy.log(response)
            expect(response.status).to.eq(201)
            expect(response.body.data).to.have.property('id')
            return response.body.data['id']
        })
            .then((id) => {
                cy.log(id)
                cy.request({
                    method: "GET",
                    url: `https://gorest.co.in/public/v1/users/${id}`,
                    headers: {
                        Authorization: "Bearer 10508461d883db15154bc3a9e1e2e46f428ef68c8d8f9d5da2d2a199d051eef9"
                    }
                }).then(function (response) {
                    // cy.log(response)
                    expect(response.status).to.eq(200)
                })
                //return id
            })
                
            
    })
})









// describe('verify the go rest api', () => {

//     function generateEmail() {
//         let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
//         let string = '';
//         for (let ii = 0; ii < 15; ii++) {
//             string += chars[Math.floor(Math.random() * chars.length)];
//         }
//         return string + '@gmail.com';
//     }

//     it('valdate the user create user API', () => {

//         cy.request({

//             method: "POST",
//             url: "https://gorest.co.in/public/v1/users",
//             headers: {
//                 Authorization: "Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"
//             },
//             body: {
//                 "name": "Test User",
//                 "email":generateEmail(),
//                 "gender": "male",
//                 "status": "active"
//             }


//         }).then(function (response) {
//             //cy.log(response)
//             expect(response.status).to.equal(201)
//             expect(response.body.data).to.have.property('id')
//             return response.body.data['id']


//         })
//         .then(function(id){
//             cy.request({
//                 method:"GET",
//                 url:`https://gorest.co.in/public/v1/users/${id}`,
//                 headers: {
//                     Authorization: "Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"
//                 }

//             }).then(function(response){
//                 expect(response.status).to.equal(200)

//             })

//             return id

//         }).then(function(id){

//         })
//     })

// })


// describe('verify the go rest api', () => {

//     function generateEmail() {
//         let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
//         let string = '';
//         for (let ii = 0; ii < 15; ii++) {
//             string += chars[Math.floor(Math.random() * chars.length)];
//         }
//         return string + '@gmail.com';
//     }

//     it('valdate the user create user API', () => {

//         cy.request({

//                 method: "POST",
//                 url: "https://gorest.co.in/public/v1/users",
//                 headers: {
//                     Authorization: "Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"
//                 },
//                 body: {
//                     "name": "Test User",
//                     "email": generateEmail(),
//                     "gender": "male",
//                     "status": "active"
//                 }


//             }).then(function(response) {
//                 cy.log(response)
                // expect(response.status).to.equal(201)
                // expect(response.body.data).to.have.property('id')
                // return response.body.data['id']


           // })
            // .then(function(id) {
            //     cy.request({
            //         method: "GET",
            //         url: `https://gorest.co.in/public/v1/users/${id}`,
            //         headers: {
            //             Authorization: "Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"
            //         }

            //     }).then(function(response) {
            //         expect(response.status).to.equal(200)

            //     })

            //     return id

            // }).then(function(id) {




            // })




//      })





// })