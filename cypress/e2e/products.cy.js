describe('Home', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.contains('a', 'Products').click()
        cy.url().should('include', '/products')
        cy.contains('h2', 'All Products').should('be.visible')
    })

    it('Test Case 8: Verify Subscription in home page', () => {
        cy.contains('.productinfo', 'Men Tshirt')
        .closest('.product-image-wrapper')
        .find('a[href*="/product_details/"]')
        .click()

        cy.contains('h2','Men Tshirt').should('be.visible')
        cy.contains('Rs. 400').should('be.visible')
        cy.contains('Brand: H&M').should('be.visible')
    })

    it('Test Case 9: Search Product', () => {
        cy.get('input#search_product').type('Men Tshirt')
        cy.get('button#submit_search').click()
        cy.contains('h2', 'Searched Products').should('be.visible')
        cy.get('.productinfo').should('have.length', 1)

        cy.contains('.productinfo', 'Men Tshirt').should('be.visible')
        cy.contains('Rs. 400').should('be.visible')
    })
})