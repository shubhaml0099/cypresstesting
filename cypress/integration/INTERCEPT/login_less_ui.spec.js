





describe('verify the login functionality', () => {


    it.only('ui less login', () => {

        cy.fixture("shub").then(({email,password}) => {

            cy.set(email, password)
            cy.contains('ram').should('be.visible');

        })

    })



















    // it('generate token',()=>{


    //     cy.request({

    //         method: "POST",
    //         url: "https://conduit.productionready.io/api/users/login",
    //         body: {
    //             "user": {
    //                 "email": "ram123@gmail.com",
    //                 "password": "ram123"
    //             }
    //         }


    //     }).then(function(response){

    //         let token = response.body.user.token
    //         localStorage.setItem('jwt', token);
    //         cy.visit('https://react-redux.realworld.io/');
    //         cy.contains('ram').should('be.visible');




    //     })

    // })











})




// describe('verify the login functionality', () => {

//    // beforeEach(function () {
//         cy.getAndSetToken()
//     })

//     it.only('ui less login', () => {

//         cy.visit('https://react-redux.realworld.io/');
//         cy.contains('chinmay').should('be.visible');

//     })

//     it('generate token', () => {


//         cy.request({

//             method: "POST",
//             url: "https://conduit.productionready.io/api/users/login",
//             body: {
//                 "user": {
//                     "email": "ram123@gmail.com",
//                     "password": "ram123"
//                 }
//             }


//         }).then(function (response) {

//             let token = response.body.user.token
//             localStorage.setItem('jwt', token);
//             cy.visit('https://react-redux.realworld.io/');
//             cy.contains('ram').should('be.visible');




//         })

//     })
// })




// …or create a new repository on the command line
// echo "# javascript" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
//git branch -M main
// git remote add origin https://github.com/shubhaml0099/javascript.git
// git push -u origin main


// …or push an existing repository from the command line
// git remote add origin https://github.com/shubhaml0099/javascript.git
// git branch -M main
// git push -u origin maingit commit



// git remote add origin https://github.com/shubhaml0099/cypress-.git
// git branch -M main
// git push -u origin main