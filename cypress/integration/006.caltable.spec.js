
// caltable method

describe('validating table', () => {
    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })
    after(function () {
        cy.log('all done ')
    })
    it('validating table one ', () => {
        let sum = 0
        cy.get('#t01').find('tbody').children().each(function (el, index) {
            if (index != 0) {
                sum = sum + Number(el.children().last().text())
            }
        }).then(() => {
            cy.log(sum)
            expect(sum).to.eq(159)
        })
    })
    it('validating table two', () => {
        let sum = 0
        cy.get('#t02').find('tbody').children().each(function (el, index) {
            if (index != 0) {
                sum = sum + Number(el.children().last().text())
            }
        }).then(() => {
            cy.log(sum)
            expect(sum).to.eq(163)
        })
    })
})



//by using  caltable()  we can write above table within small code 

beforeEach(function () {
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
})
describe('validate the tables ', () => {
    function calTable(id, expectedVal) {
        let sum = 0
        cy.get(`#${id}`).find('tbody').children().each(function (el, index) {
            if (index != 0) {
                sum = sum + Number(el.children().last().text())
            }
        }).then(() => {
        
            expect(sum).to.eq(expectedVal)
        })

    }
    it('valide table for one', () => {
        calTable('t01', 159)
    })

    it('validate table two', () => {
        calTable('t02', 163)
    })
})
















// describe('validate the tables', () => {
//     beforeEach(function () {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//     })
//     it('validate the first table', () => {
//         let sum = 0
//         // [tr,tr,tr,tr]
//         // <td class = "b">45</td>
//         cy.get('#t01').find('tbody').children().each(function (el, index) {
//             // tr
//             // tr
//             // tr
//             // tr
//             // '45' ==> 45
//             if (index != 0) {
//                 sum = sum + Number(el.children().last().text())// '45' ==> 45
//             }
//         }).then(() => {
//             cy.log(sum)
//             expect(sum).to.eq(159)
//         })
//     })
//     it('validate the first table', () => {
//         let sum = 0
//         cy.get('#t02').find('tbody').children().each(function (el, index) {
//             if (index != 0) {
//                 sum = sum + Number(el.children().last().text())// '45' ==> 45
//             }
//         }).then(() => {
//             expect(sum).to.eq(163)
//         })
//     })
// })


// describe('validate the tables', () => {

//     function calTable(id, expectedVal) {
//         let sum = 0
//         cy.get(`#${id}`).find('tbody').children().each(function (el, index) {
//             if (index != 0) {
//                 sum = sum + Number(el.children().last().text())// '45' ==> 45
//             }

//         }).then(() => {
//             expect(sum).to.eq(expectedVal)

//         })

//     }


//     beforeEach(function () {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')

//     })




//     it('validate the first table', () => {

//         calTable('t01', 159)

//     })

//     it('validate the first table', () => {

//         calTable('t02', 163)

//     })



// }) 