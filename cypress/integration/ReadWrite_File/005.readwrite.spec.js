// readwrite function 

describe('verify the readWrite function ', () => {

    it('verify the write function', () => {
        cy.writeFile('testOne.txt', 'hello india iam learning cypress \n\n')
        cy.writeFile('testOne.txt', 'hello world', { flag: 'a+' })

    })

    it('verify the read function', () => {
        cy.readFile('testOne.txt').should('exist').and('contain', 'hello')
        cy.readFile('testOne.txt').should('contain','hello')
    })

    it('verify the write json function',()=>{
        cy.writeFile('xyz.json','hello india')
    })

    it('verify the read json function',()=>{
        cy.readFile('xyz.json').should('exist').and('contain','india')
    })
})
