class login
{
    setUserName(username)
    {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
    }

    setPassword(password)
    {
        cy.get(':nth-child(3) > .oxd-input-group').type(password);
    }

    clickSubmit()
    {
        cy.get('.oxd-button').click()
    }

    verifyLogin()
    {
        cy.title().should('eq','OrangeHRM')
    }
}

export default login;