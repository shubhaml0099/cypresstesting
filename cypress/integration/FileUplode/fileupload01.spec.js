describe('verify the file upload', function () {
    it('verify the upload option', () => {
        let image = "Screenshot.png"
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myFile').attachFile(image)
        cy.get('#submit-button').click()
        cy.url().should('contain',image)
    })

    it('verify the upload option', () => {
        let image = "Screenshot.png"
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        cy.get('#fileUpload').attachFile(image)
        cy.get('[class="filename"]').should('have.text',image)
    })

    it('verify the upload option', () => {
        let image = "Screenshot.png"
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/?submit-on-demand')
        cy.get('#file').attachFile(image)
        cy.get('label[for="file"]').should('have.text',image)
    })

    it.only('verify the  mutile upload option', () => {
        let image = "Screenshot.png"
        let image2 = "Screenshot.png"
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        cy.get('#useSingleRequestCheck').click({force:true})
        cy.get('#igUpload1_ibb_fp')
        .attachFile([image,image,image])
        //cy.get('label[for="file"]').should('have.text',image)
    })




})