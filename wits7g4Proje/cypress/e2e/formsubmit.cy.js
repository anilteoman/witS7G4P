describe('form basarili dolduruldugunda submit edilebiliyor', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-cy="input-email"]').type('aaa@bbb.com');
    cy.get('[data-cy="input-password"]').type('aA123456***');
    cy.get('[data-cy="terms"]').check();
    cy.get('[data-cy="submit"]').click();

    cy.contains("Success").should('be.visible');
  })
})