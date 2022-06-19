





describe('validate API', () => {
    it('verify POST request', () => {
        cy.request({
            Method: "POST",
            url: 'https://reqres.in/api/users',
            Body: '{name: "morpheus", job: "leader"}',

        }).then(function (resp) {
            expect(resp.status).to.eq(200)

        })
    })
})
it('verify PUT request',()=>{
    cy.request({
        Method:"PUT",
        url:"https://reqres.in/api/users/2",
        Body:{name: "morpheus", job: "zion resident"},
    }).then(function(rep){
       // cy.log(rep)
    expect(rep.body)
    })
})