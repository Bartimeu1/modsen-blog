describe('locale spec', () => {
  it('toggle locale button should exist', () => {
    cy.visit('/');
    cy.get('[data-testid="locale-button"]').should('exist');
  });

  it('should change dynamic locale route after click', () => {
    cy.visit('/');

    cy.get('[data-testid="locale-button"]').click();
    cy.url().should('eq', 'http://localhost:3000/ru');

    cy.get('[data-testid="locale-button"]').click();
    cy.url().should('eq', 'http://localhost:3000/en');
  });
});
