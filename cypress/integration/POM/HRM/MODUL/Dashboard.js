export class DashBord {
    Navigate(){
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/admin/viewSystemUsers")
    }
 Admin(){
    cy.contains('Admin').click()
    cy.get('[id="menu_admin_UserManagement"]').click()
    
 }

}

