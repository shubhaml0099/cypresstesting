
/// <refrance='cypress,/>

// calender

describe('varify the calender date function ', () => {

    it('verify the date function', () => {
        cy.visit('https://webdriveruniversity.com/Datepicker/index.html'),
         cy.get('#datepicker').last().click()


        let date = new Date();  // date = new Date() is the defaulat function for calender in cypress 

        date.setDate(date.getDate() + 400)
        let year = date.getFullYear()   //2023
        let month = date.getMonth()     //  2
        let day = date.getDate()
        let textMonth = date.toLocaleString('default',{month:'short'})   //march

        cy.log(year)
        cy.log(month)
        cy.log(day)
        cy.log(textMonth)


        function monthYear(){

            cy.get('.datepicker-switch').first().click()
           // cy.get('.datepicker-switch').first().click()
            cy.get('td[colspan="7"]').last().find('span').each(function(el){
                if(el.text()==year){
                    el.click()
                }
            })

        }


        function montht(){

            cy.get('.datepicker-switch').first().click()
           // cy.get('.datepicker-switch').first().click()
            cy.get('td[colspan="7"]').first().find('span').each(function(el){
               // cy.log(el.text())
                if(el.text().includes( textMonth)){
                    el.click()
                }
            })

        }

        function currentday(){

          
            cy.get('tbody').first().find('td').each(function(el){
                //cy.log(el.text())
                if(el.text().includes( day)){
                    el.click()
                }
            })
        }
            monthYear()
            montht()
            currentday()
            cy.get('.form-control').then((el)=>{
               // cy.log(el.textContent())
            })
            let ss = document.getElementsByClassName('.form-control').value
            cy.log(ss)

    })



})



// describe('verify the functionality for the calender',()=>{

//     it('verify the functionality for calender',()=>{

//         cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
//         cy.get('#datepicker').click()

//         let date = new Date();

//         //property and method

//         date.setDate(date.getDate()+400)
//         let year = date.getFullYear()  // 2023
//         let month = date.getMonth()
//         let day = date.getDate()
//         let textMonth = date.toLocaleString('default',{month:"long"})


//         // 2023
//         // cy.log(year)
//         // cy.log(month)
//         // cy.log(day)
//         // cy.log(textMonth)

//         function getMonYear(){

//             cy.get('.datepicker-switch').eq(0).then(function(el){

//                 if(!el.text().includes(year)){
//                     cy.get('.next').eq(0).click()
//                     getMonYear()
//                 }


//             }).then(()=>{

//                 cy.get('.datepicker-switch').eq(0).then(function(el){

//                     if(!el.text().includes(textMonth)){
//                         cy.get('.next').eq(0).click()
//                         getMonYear()
//                     }


//                 })


//             })



//         }

//         function getDate(){

//             cy.get('.day').contains(day).click()

//         }
//         getMonYear()
//         getDate()
//     })

// }) 