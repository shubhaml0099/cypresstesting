describe('verify the GET request', function () {

    let token = "4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"

    it('verify the GET request for Go rest', function () {

        cy.request({
            method: "GET",
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function (response) {
            //cy.log(response)
            expect(response.status).to.eqls(200)
            expect(response.body.length).to.eqls(20)
            return response.body

        }).then(function (users) {
                cy.log(users)
            // let aa = users.filter(function (el) {
            //     return el.name.includes('Bhagwati Saini LLD')
            // })
           // expect(aa[0]).to.have.all.keys('id', 'name', 'email', 'gender', 'status')
            expect(users.some(el=> el.name.includes('Bhagwati Saini LLD'))).to.eqls(true)



            // cy.log(users)
            //    users.forEach(element => {
            //        expect(element).to.have.property('email')
            //        expect(element).to.have.property('name')
            //        expect(element).to.have.property('id')
            //        expect(element).to.have.property('gender')
            //        expect(element).to.have.property('status')
            //        expect(element).to.have.all.keys('id','name','email','gender','status')


            //    });

        })




    })

// data.forEach(function(payload){
//     it('verify the user additon', function () {
//         cy.request({
//             method: "POST",
//             url: 'https://gorest.co.in/public/v2/users',
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             },
//             body:payload

//         }).then(function (response) {
//             expect(response.status).to.eqls(201)
//             expect(response.body).to.have.property('id')
//         })

//     })

//})

    // it('verify the user additon', function () {

    //     cy.request({
    //         method: "POST",
    //         url: 'https://gorest.co.in/public/v2/users',
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         },
    //         body: {
    //             "name": "Tenali Ramakrishna",
    //             "gender": "male",
    //             "email": `${Math.floor(Math.random() * 100000)}tenali.ramakrisddddhna@15ce.com`,
    //             "status": "active"
    //         }

    //     }).then(function (response) {
    //         expect(response.status).to.eqls(201)
    //     })

    // })



})