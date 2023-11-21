

import login from "../cypress/fixtures/page objects/orangepage.js";
describe ('my first test', () => {

    it('test1', () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com")
        cy.title().should('eq','OrangeHRM')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group').type("admin123")
        cy.get('.oxd-button').click()
        cy.title().should('eq','OrangeHRM') 
        cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-text').click()
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    } )

    it.only('test1 pom', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com")
        
        const ln = new login();
        ln.setUserName("Admin")  
        ln.setPassword("admin123")
        ln.clickSubmit();
        ln.verifyLogin();
    })
}
)