
describe ('test parabank', () => {

    it('test1', () =>{

        cy.visit("https://www.saucedemo.com")
        cy.title().should('eq','Swag Labs')
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()

         
    } )
}
)