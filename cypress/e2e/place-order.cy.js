// Teste de cadastro, adição ao carrinho e finalização de pedido 
describe('Automation Exercise - Place Order', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('a', 'Signup / Login').click()
  })

  it.only('Test Case 15: Place Order: Register before Checkout', () => {
    const randomUserComplement = new Date().getTime()
    const username = `Cypress_${randomUserComplement}`
    const email = `cypress${randomUserComplement}@test.com`

    //cypress/support/commands.js
    cy.registerUser(username, email)
    cy.addMenTshirtToCart()
    cy.placeOrder()
  })
})