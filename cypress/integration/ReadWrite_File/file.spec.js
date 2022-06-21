it('verify the functionality for fixture', function () {
    cy.fixture('example3').then(function(obj){
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:obj
        }).then(function(){
            cy.readFile('cypress/fixtures/example4.json').then(function(obj){
                if(obj.name == "morpheus"){
                    obj.name = "chinmay"
                    cy.writeFile('cypress/fixtures/example4.json',obj)

                }

            })

        })
    })
})