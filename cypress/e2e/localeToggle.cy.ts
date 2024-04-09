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

  it('base localization should be english', () => {
    cy.visit('/');

    cy.get('[data-testid="video-button"]')
      .should('exist')
      .should('have.text', 'Video about us');
    cy.get('[data-testid="home-link"]').should('exist').contains('Home');
    cy.get('[data-testid="blog-link"]').should('exist').contains('Blog');
  });

  it('should change localization into russian after click', () => {
    cy.visit('/');
    cy.get('[data-testid="locale-button"]').click();

    cy.get('[data-testid="video-button"]')
      .should('exist')
      .should('have.text', 'Видео о нас');
    cy.get('[data-testid="home-link"]').should('exist').contains('Главная');
    cy.get('[data-testid="blog-link"]').should('exist').contains('Блог');
  });
});
