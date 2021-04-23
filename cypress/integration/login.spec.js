describe('Login to Saucedemo', () => {
    it('Login as valid user', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()

        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it('Incorrect user', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test=username]').type('bad_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()

        cy.get('[data-test=error]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        cy.url().should('eq', 'https://www.saucedemo.com/')
    })

    it('Incorrect password', () => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('bad_password')
        cy.get('[data-test=login-button]').click()

        cy.get('[data-test=error]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
        cy.url().should('eq', 'https://www.saucedemo.com/')
    })
})
