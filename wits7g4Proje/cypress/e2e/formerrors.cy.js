describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')


    // email yanlis , buton disabled
    cy.get('[data-cy="input-email"]').type('eerrrr@eee');
    cy.contains("Geçerli bir e-posta adresi girin").should('be.visible');
    cy.get('[data-cy="submit"]').should('be.disabled');

    //email ve password yanlis , ekranda password hata mesaji var - button disabled
    cy.get('[data-cy="input-email"]').clear().type('eerrrr@eee');
    cy.get('[data-cy="input-password"]').clear().type('abeee22');
    cy.contains("Güçlü bir şifre girin").should('be.visible');
    cy.get('[data-cy="submit"]').should('be.disabled');


    //email ve password doru , sartlar kabul edilmemis

    cy.get('[data-cy="input-email"]').clear().type('aaaa@aab.com');
    cy.get('[data-cy="input-password"]').clear().type('aBeee22**');
    cy.get('[data-cy="submit"]').should('be.disabled');
  })
})