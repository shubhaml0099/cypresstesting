var cookie = ['protein', 'vegetable']
describe('applitools cookie', () => {
    beforeEach(() => {
        cy.visit('https://kitchen.applitools.com/ingredients/cookie');
    })
    it("get All cookies", () => {
        cy.getCookies().then(cookies => {
            cy.log(cookies)
        })
    })
    it("get All cookies", () => {
        cy.getCookies().should('have.length', 2)
        cy.getCookies().then((cookies) => {
            expect(cookies[0]).to.have.property('name', 'protein')
            expect(cookies[1]).to.have.property('name', 'vegetable')

        })
    })

    it("get All cookies and comparere with the expected jresult", () => {
        cy.getCookies().should('have.length', 2)
        cy.getCookies().each((currentCookie, index) => {
            expect(currentCookie).to.have.property('name', cookie[index])

        })
    })
    it("delete/clear  single cookie ", () => {
        cy.clearCookie('protein').should('be.null')
        cy.clearCookie('vegetable').should('be.null')
    })
    it("delete/clear All  cookies ", () => {
        cy.clearCookies()
        cy.getCookies().should('be.empty')
    })
    it('modify existed cookies value',()=>{
        cy.clearCookie('vegetable').then(()=>{
            cy.setCookie('vegetable','cabage')
            .should('have.property','value','cabage')
        })
        
    })
    it('set new cookies',()=>{
    cy.setCookie('fruit','Apple').should('have.property','value','Apple')
    })
   
})
// it('clear local storage',()=>{
//     cy.visit('http://practice.automationtesting.in/')
//     cy.clearLocalStorage().then(storage=>{
//        expect(storage).to.be.empty
//     })
//     cy.clearLocalStorage('/wp-admin/admin-ajax.php-wc_cart_hash')
//     cy.clearLocalStorage().should('be.empty')
//     })