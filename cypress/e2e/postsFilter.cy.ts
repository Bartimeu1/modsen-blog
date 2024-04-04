describe('posts filter spec', () => {
  it('filter controls should exist', () => {
    cy.visit('/category/business');

    cy.get('[data-testid="category-controls"]').should('exist');
    cy.get('[data-testid="tags-controls"]').should('exist');
    cy.get('[data-testid="search-controls"]').should('exist');
  });

  it('should change current category after category link click', () => {
    cy.visit('/category/business');

    cy.get('[data-testid="category-controls-link"]')
      .should('have.length', 4)
      .eq(1)
      .click();

    cy.url().should('eq', 'http://localhost:3000/en/category/startup');
    cy.get('[data-testid="post-category"]').each((item) => {
      cy.wrap(item).invoke('text').should('eq', 'STARTUP');
    });

    cy.get('[data-testid="category-controls-link"]').eq(2).click();
    cy.url().should('eq', 'http://localhost:3000/en/category/economy');
    cy.get('[data-testid="post-category"]').each((item) => {
      cy.wrap(item).invoke('text').should('eq', 'ECONOMY');
    });
  });
});
