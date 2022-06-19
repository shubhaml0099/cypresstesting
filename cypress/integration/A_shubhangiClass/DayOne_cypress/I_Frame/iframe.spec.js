

// iframe handel by using command or by using without plugging 


/// < reference type = "Cypress" />
describe("iframe handel by verious way ",()=>{
    it('handel iframe by using commands ',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').then((response)=>{
            let ifrem = response.contents().find('body')
            //cy.log(ifrem)
            cy.wrap(ifrem).as('ifBody')
            cy.get('@ifBody').find('p').should('be.visible')
            .and('have.text','Your content goes here.')
            
        })
    })
    it('iframe handel by using plugging ',()=>{

        
// using install Plugin
// https://www.npmjs.com/package/cypress-iframe
// npm install -D cypress-iframe
// cypress/support/commands.js - import 'cypress-iframe';

        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded().
        cy.iframe().find('#tinymce').should('have.text','Your content goes here.')


    })
    
    // it('Iframe with Plugin',()=>{
    //     cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    //     cy.frameLoaded('#courses-iframe')
    //     cy.iframe().find('a[href="#/mentorship"]').eq(1).click({force: true})
    //     .should('have.text','Mentorship')
        
    // })
})

// using install Plugin
// https://www.npmjs.com/package/cypress-iframe
// npm install -D cypress-iframe
// cypress/support/commands.js - import 'cypress-iframe';
// describe('iframe without Plug in', () => {


//     it('Iframe without Plugin',()=>{
//         cy.visit('https://the-internet.herokuapp.com/iframe');
//         cy.get('#mce_0_ifr').then(($iframeEl)=>{
//                 let iframeContentsBody =  $iframeEl.contents().find('body')
//                 cy.wrap(iframeContentsBody).as('iframeBody')
//                 cy.get('@iframeBody').find('p').should('be.visible')
//                 .and('have.text','Your content goes here.')

//         })
//     })
//     it.only('tc 2 ',()=>{
//         cy.visit('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame')
//         cy.get('#google_esf').then(($ifEl) =>{
//             var ifContentsbody = $ifEl.contents().find('body')
//             cy.wrap(ifContentsbody).as('iframeBody')
//             cy.get('@iframeBody').find('img[alt="GlobalSQA"]').should('be.visible')

//         })
//     })
//     it('iframe', () => {

//         //--------with plug in-------------
   

//         // cy.visit('https://demoqa.com/frames')
//         // cy.frameLoaded('#frame1')
//         // cy.iframe('#frame1').find('#sampleHeading').should('exist')
//         // .and('have.text','This is a sample page')


//       //  --------------without plugin-----------------
//         // cy.get('iframe.lazyloaded').then((frameEl)=>{
//         //     var iframebody = frameEl.contents().find('body')
//         //     cy.wrap(iframebody).as('iframeBoddy')
//         //     cy.get('@iframeBoddy').find('a[title="GlobalSQA"]').should('exist')
//         //     .and('be.visible')
//         // })
//     })
    

// })

// describe('iframe with Plug in', () => {


//     it('Iframe with Plugin',()=>{
//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
//         cy.frameLoaded('#courses-iframe')
//         cy.iframe().find('a[href="#/mentorship"]').eq(1).click({force: true})
//         .should('have.text','Mentorship')
        
//     })
// })