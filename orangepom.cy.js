import login from "C:/Users/iamnj/CypressAutomation/cypress/fixtures/page objects/orangepage.js";

describe ('my first test', () => {

    it('test1 pom', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com")

        const ln = new login();
        ln.setUserName("Admin")  
        ln.setPassword("admin123")
        ln.clickSubmit();
        ln.verifyLogin();
    })
}
)