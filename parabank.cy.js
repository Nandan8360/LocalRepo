describe ('test parabank', () => {

    it('test1', () =>{

        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get(':nth-child(2) > .input').type("user")
        cy.get(':nth-child(4) > .input').type("password")
        cy.get(':nth-child(5) > .button').click()

         
    } )
}
)