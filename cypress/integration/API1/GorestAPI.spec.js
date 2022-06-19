///<reference types ="cypress"/>


describe('verify the GET API', function () {

    // token
    let token = "4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"

    it('verify the GET API', function () {
        cy.request({
            method: 'GET',
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(function (res) {
            expect(res.status).to.equal(200)
            expect(res.body).to.have.length(20)
        })

    })

    


//     let obj = {
//         name: "Tenalia Ramakrishna",
//         gender: "male",
//         email: `tenali.${Math.random()*6}ramakridddsddddhna@15ce.com`,
//         status: "inactive"
//     }


//     it('verify the POST API', function () {
//         cy.request({
//             method: 'POST',
//             url: "https://gorest.co.in/public/v2/users",
//             headers: {
//                 'Authorization': 'Bearer ' + token
//             },
//             body:obj
//         }).then(function (res) {
//             expect(res.status).to.equal(201)
//             expect(res.body).to.have.property('id')
//             expect(res.body.email).to.equal(obj.email)
//             expect(res.body.gender).to.equal(obj.gender)
//             expect(res.body.status).to.equal(obj.status)
//             expect(res.body.name).to.equal(obj.name)
//         })
//     })

//     it('verify the PUT API', function () {
//         cy.request({
//             method: 'PUT',
//             url: "https://gorest.co.in/public/v2/users/56",
//             headers: {
//                 'Authorization': 'Bearer ' + token
//             },
//             body:obj
//         }).then(function (res) {
//             expect(res.status).to.equal(200)
//             expect(res.body.email).to.equal(obj.email)
//             expect(res.body.gender).to.equal(obj.gender)
//             expect(res.body.status).to.equal(obj.status)
//             expect(res.body.name).to.equal(obj.name)
//         })
//     })

    
//     it.only('verify the DELETE API', function () {
//         cy.request({
//             method:'DELETE',
//             url: "https://gorest.co.in/public/v2/users/6995",
//             headers: {
//                 'Authorization': 'Bearer ' + token
//             }
//         }).then(function (res) {
//             expect(res.status).to.equal(204)
          
//         })
//     })



// // 200
// // 201
// // 200
// // 404 
// // 403
// // 503



 })





///======================================================================================================================
// self practice ===>>
// berrar tocan = '10508461d883db15154bc3a9e1e2e46f428ef68c8d8f9d5da2d2a199d051eef9'
//Bearer 10508461d883db15154bc3a9e1e2e46f428ef68c8d8f9d5da2d2a199d051eef9


// curl -i -H "Accept:application/json" -H "Content-Type:application/json" -XGET "https://gorest.co.in/public/v2/users"

//curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ACCESS-TOKEN" 
//-XPOST "https://gorest.co.in/public/v2/users" -d '{"name":"Tenali Ramakrishna", "gender":"male",
// "email":"tenali.ramakrishna@15ce.com", "status":"active"}'
