export class homepage {
    element = {
        UserName: '[name="txtUsername"]',
        Passward: '[name="txtPassword"]',
        SubmitButton: '[type="submit"]',
        AddEmployee: '#menu_pim_addEmployee',
        EmpFirstName: 'input[id="firstName"]',
        EmpLastName: 'input[id="lastName"]',
        EmpMiddalName: 'input[id="middleName"]',
        EmpSubmit: '#chkLogin',
        EmpUserName: '#user_name',
        EmpPassword: '#user_password'
    }

    Login(username, password) {
        cy.get('[name="txtUsername"]').type(username)
        cy.get('[name="txtPassword"]').type(password)
        cy.get('[type="submit"]').click()
    }
    AddEmployee(employee_Fname,employee_Mname,employee_Lname,employee_UserName,employee_Password) {
        cy.get('[id="mainMenu"]>ul>li').eq(1).click()
        cy.get('#menu_pim_addEmployee').click({ force: true })
        cy.get('input[id="firstName"]').type(employee_Fname)
        cy.get('input[id="middleName"]').type(employee_Mname)
        cy.get('input[id="lastName"]').type(employee_Lname)
        cy.get('#chkLogin').click()
        cy.get('#user_name').type(employee_UserName)
        cy.get('#user_password').type(employee_Password)
        cy.get('#re_password').type(employee_Password)
        cy.get('#status').select('Enabled')
        cy.get('#btnSave').click()
    }
    ValidateEmployee(username){
        cy.get('#menu_pim_viewEmployeeList').click({ force: true })
        cy.wait(2000)
       // cy.get('[data-top="263.6666564941406"]').type(username)
       cy.get('[name="empsearch[employee_name][empName]"]').eq(0).type(username)
        cy.wait(2000)
        cy.get('[id="searchBtn"]').click()
        //cy.get('.odd > :nth-child(3) > a').should('contain', 'Yogiraj')

    }
    DeleteEmployee(EmployeeName){
        cy.get('#menu_pim_viewEmployeeList').click({ force: true })
        cy.wait(2000)
        cy.get('[name="empsearch[employee_name][empName]"]').eq(0).type(EmployeeName)
        cy.wait(2000)
        cy.get('[id="searchBtn"]').click()
        cy.get('#ohrmList_chkSelectAll').click()
        cy.get('#btnDelete').click()
        cy.get('#dialogDeleteBtn').click()
    }
}


