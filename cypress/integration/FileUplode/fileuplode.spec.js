

// file upload test cases

describe('verify the file upload option ', () => {
    it('verify the normal file attaach and upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('photos.png')
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('photos')

    })
    it('verify the multiple file input upload ', () => {
        let files = ['photos.png', 'photos1.png', 'photos2.png', 'photos3.png', 'photos4.png']
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(files)
        cy.get('#fileList').children().should('have.length', '5')
    })

    it.only('verify the chenge in file name', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({ filePath: 'photos.png', fileName: 'shubham.png' })
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('shubham.png')
        cy.screenshot()
    })

})