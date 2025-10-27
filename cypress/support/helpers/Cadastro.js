class Cadastro {
  preencherFormularioDeCadastro(username, email) {
    cy.get('[data-qa=signup-name]').type(username);
    cy.get('[data-qa=signup-email]').type(email);
    cy.contains('button', 'Signup').click();
  }
}

export default new Cadastro;
  