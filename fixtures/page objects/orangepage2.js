class login

{
    txtUserName=":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
    txtPassword=":nth-child(3) > .oxd-input-group";
    btnSubmit=".oxd-button";

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