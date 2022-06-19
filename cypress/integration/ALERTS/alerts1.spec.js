
// window alerts handling 

describe('window alerts ', () => {
    // beforeEach(()=>{
    //     cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
    // })
    it('window alerts normal or simple alerts', () => {
        cy.get('#button1').click()
        cy.on('window:alert', (el) => {
            expect(el).to.contain('I am an alert box!')
        })
    })

    it('verify the js window:alert', () => {
        cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
        cy.window().then(function (el) {
            let ab = el.alert()
            expect(ab).to.eq(true)
        })

    })

    it('window alerts JavaScript Confirm Box alert ', () => {
        cy.get('#button4').click()
        cy.on('window:Confirm', (el) => {
            expect(el).to.contain('Press a button!')
            return (true)
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    })


    // by using cy.window() method & cy.stub
    it('window alerts JavaScript Confirm Box alert press ok ', () => {
        cy.window().then((el) => {
            cy.stub(el, "confirm").returns(true)
        })
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    })
    it('window alerts JavaScript Confirm Box alert press cancel ', () => {
        cy.window().then((el) => {
            cy.stub(el, "confirm").returns(false)
        })
        cy.get('#button4').click()
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
    })

    // alert prompt 

    it('window alerts JavaScrip prompt alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(el => {
            cy.stub(el, 'prompt').returns('hi hellow shubham')
        })
        cy.contains('Click for JS Prompt').click()
        cy.get('#result').should('contain', 'hi hellow shubham')

    })
    it('window alerts JavaScrip prompt alert by using cy.on()', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Prompt').click()
        cy.on('window:prompt', (el) => {
            returns('hi hellow shubham')
        })
        cy.get('#result').should('contain', 'hi hellow shubham')
    })


// only for sunil problem 


    it.only('window alerts JavaScript Confirm Box alert press ok ', () => {
        cy.window().then((el) => {
            cy.log(el)
            //cy.stub(el, "confirm").returns(true)
        })
        // cy.get('#button4').click()
        // cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    })


})



























// describe(('verify the js alert'), () => {
//     it('verify the js window:alert', () => {
//         cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
//         cy.get('#button1').click()
//         cy.on('window:alert', (str) => {
//             expect(str).to.equal('I am an alert box!')
//         })

//     })

//     it('verify the js window:alert', () => {
//         cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
//         cy.window().then(function (el) {
//             let ab = el.alert()
//             expect(ab).to.eq(true)
//         })

//     })

//     it('verify the js window:alert', () => {
//         cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
//         cy.get('#button4').click()
//         cy.on('window:confirm', (str) => {
//             expect(str).to.equal('Press a button!')
//             return true
//         })
//         cy.get('#confirm-alert-text').should('have.text', "You pressed OK!")
//     })

//     it('verify the js window:alert', () => {
//         cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
//         cy.get('#button4').click()
//         cy.on('window:confirm', (str) => {
//             expect(str).to.equal('Press a button!')
//             return true
//         })
//         cy.get('#confirm-alert-text').should('have.text', "You pressed OK!")
//     })

//     it('verify the js window:alert', () => {
//         cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
//         cy.get('#button4').click()
//         cy.on('window:confirm', (str) => {
//             expect(str).to.equal('Press a button!')
//             return false
//         })
//         cy.get('#confirm-alert-text').should('have.text', "You pressed Cancel!")
//     })


//     it('verify the js window:alert', () => {
//         cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
//         cy.window().then(function (el) {
//             cy.stub(el, 'confirm').returns(true)
//         })
//         cy.get('#button4').click()
//         cy.get('#confirm-alert-text').should('have.text', "You pressed OK!")

//     })

//     it('verify the js window:alert', () => {
//         cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
//         cy.window().then(function (el) {
//             cy.stub(el, 'confirm').returns(false)
//         })
//         cy.get('#button4').click()
//         cy.get('#confirm-alert-text').should('have.text', "You pressed Cancel!")

//     })

//     it('verify the js window:alert', () => {
//         cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
//         cy.window().then(function (el) {
//             cy.stub(el, 'prompt').returns("Here we go!")
//         })
//         cy.contains('Click for JS Prompt').click()
//         cy.get('#result').should('contain', "Here we go!")

//     })
//     it('using window object', () => {
//         cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
//         cy.window().then((win) => {
//             cy.stub(win, 'alert').as('alert')
//             //cy.wrap(win.alert).as('alert')
//         })
//         cy.get('#button1').click()
//         cy.get('@alert').should('have.been.calledOnceWith', "I am an alert box!")
//     })

//     it.only('using window object', () => {
//         cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
//         cy.window().then((win) => {
//             cy.stub(win, 'confirm').as('alert2')
//             //cy.wrap(win.alert).as('alert')
//         })
//         cy.get('#button4').click()
//         cy.get('@alert2').should('have.been.calledOnceWith', "Press a button!")
//     })
