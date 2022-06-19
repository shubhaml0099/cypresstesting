// describe and validate jqueary method //

// two methods to handel iframe by jqueary & by javascript method


describe('validate the jqueary method ',()=>{
    it('validate iframe by using jqueary method',()=>{
        cy.visit('https://webdriveruniversity.com/IFrame/index.html'),
        // id ----- iframe
        // then() ====> iframe - contents() --- document 
        // find ---- body (no more cypress) ---- cypress and given alias name 
        // find(.sub-heading). first and validate the text

        cy.get('#frame').then(function(a){
            //cy.log(a)
            let body = a.contents().find('body')
            cy.wrap(body).as('elementElement')
            cy.get('@elementElement').find('.sub-heading').first().should('have.text','Who Are We?')
        })
    })
    it('validate iframe by using js method',()=>{
        cy.visit('https://webdriveruniversity.com/IFrame/index.html'),
        cy.get('#frame').then((el)=>{
            let body = el['0'].contentDocument.body
            cy.wrap(body).as('elementone')
            cy.get('@elementone').find('.sub-heading').first().should('have.text','Who Are We?')
        })
    })

   
})



describe('verify the go rest api', () => {

    function generateEmail() {
        let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let string = '';
        for (let ii = 0; ii < 15; ii++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string + '@gmail.com';
    }

    it('valdate the user create user API', () => {
        cy.request({

                method: "POST",
                url: "https://gorest.co.in/public/v1/users",
                headers: {
                    Authorization: "Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"
                },
                body: {
                    "name": "Test User",
                    "email": generateEmail(),
                    "gender": "male",
                    "status": "active"
                }
            }).then(function(response) {
                //cy.log(response)
                expect(response.status).to.equal(201)
                expect(response.body.data).to.have.property('id')
                return response.body.data['id']
            })
            .then(function(id) {
                cy.request({
                    method: "GET",
                    url: `https://gorest.co.in/public/v1/users/${id}`,
                    headers: {
                        Authorization: "Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"
                    }

                }).then(function(response) {
                    expect(response.status).to.equal(200)

                })

                // return id

            }).then(function(id) {

            })
    })
})