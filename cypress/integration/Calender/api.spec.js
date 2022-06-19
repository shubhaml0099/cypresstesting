describe('verify the fixture topic in js', function () {
    let obj
    before(() => {
        console.log('hello')
        cy.fixture('example').then((data) => {
            obj = data
            cy.log(obj)
        })

    })

   

    // obj.forEach(function (el) {
    //     it('verify the fixture', function () {
    //         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(el.firstName)
    //         cy.get('input[name="last_name"]').type(el.lastName)
    //         cy.get('input[name="email"]').type(el.email)
    //         cy.get('textarea[name="message"]').type(el.message)
    //         cy.get('input[value ="SUBMIT"]').click()
    //     })
    // })


    it('verify the fixture', function () {
        obj.forEach(function(el){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.message)
            cy.get('input[value ="SUBMIT"]').click()

        })
      
    })







    // it('verify the fixture', function () {
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type(obj[0].firstName)
    //     cy.get('input[name="last_name"]').type(obj[0].lastName)
    //     cy.get('input[name="email"]').type(obj[0].email)
    //     cy.get('textarea[name="message"]').type(obj[0].message)
    //     cy.get('input[value ="SUBMIT"]').click()
    // })

    // it('verify the fixture', function () {
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type(obj[1].firstName)
    //     cy.get('input[name="last_name"]').type(obj[1].lastName)
    //     cy.get('input[name="email"]').type(obj[1].email)
    //     cy.get('textarea[name="message"]').type(obj[1].message)
    //     cy.get('input[value ="SUBMIT"]').click()
    // })




    // let obj = {
    //     first_name: "chinmay",
    //     last_Name: "deshpande",
    //     email: "chinmaydeshpande010@gmail.com",
    //     message :"learning js"
    // }

    // let obj1 = {
    //     first_name: "poorva",
    //     last_Name: "vyas",
    //     email: "poorvvyas@gmail.com",
    //     message :"Poorva is learning js"
    // }

    // it('verify the fixture', function () {
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type('chinmay')
    //     cy.get('input[name="last_name"]').type('deshpande')
    //     cy.get('input[name="email"]').type('email')
    //     cy.get('textarea[name="message"]').type('helli')
    //     cy.get('input[value ="SUBMIT"]').click()
    // })

    // it('verify the fixture', function () {
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type('chinmay')
    //     cy.get('input[name="last_name"]').type('deshpande')
    //     cy.get('input[name="email"]').type('email')
    //     cy.get('textarea[name="message"]').type('helli')
    //     cy.get('input[value ="RESET"]').click()
    // })

    // it('verify the fixture', function () {
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type(obj.first_name)
    //     cy.get('input[name="last_name"]').type(obj.last_Name)
    //     cy.get('input[name="email"]').type(obj.email)
    //     cy.get('textarea[name="message"]').type(obj.email)
    //     cy.get('input[value ="RESET"]').click()
    // })

    // it('verify the fixture', function () {
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type(obj1.first_name)
    //     cy.get('input[name="last_name"]').type(obj1.last_Name)
    //     cy.get('input[name="email"]').type(obj1.email)
    //     cy.get('textarea[name="message"]').type(obj1.email)
    //     cy.get('input[value ="RESET"]').click()
    // })

    // only for the one testcase

    // {
    //     "firstName": "Using fixtures to represent data",
    //     "lastName": "hello@cypress.io",
    //     "email": "Fixtures are a great way to mock data for responses to routes",
    //     "message":"hello"
    //   }


    // it.only('verify the fiture for only one testcase',function(){
    //     cy.fixture("example").then(function(data){
    //         //cy.log(data)
    //         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(data.firstName)
    //         cy.get('input[name="last_name"]').type(data.lastName)
    //         cy.get('input[name="email"]').type(data.email)
    //         cy.get('textarea[name="message"]').type(data.message)
    //         cy.get('input[value ="RESET"]').click()

    //     })


    // })





})