describe ("Assertions demo",()=>{
    it ("Implicit Assertions demo",()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com')

        //should and

       cy.url().should('include','orangehrmlive.com')
        //.should('eq','https://opensource-demo.orangehrmlive.com')
        .should('contain','orangehrm')
        /*
       cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com')
        .and('contain','orangehrm')
        */
       cy.title().should('include','Orange')
       .and('eq',"OrangeHRM")
    })
 
})