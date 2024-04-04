describe('contact form spec', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://api.emailjs*', (req) => {
      req.reply({
        statusCode: 200,
        body: { success: true },
        headers: { 'content-type': 'application/json' },
      });
    });
  });

  it('should send data if fields are valid', () => {
    cy.visit('/contact');

    cy.fixture('user').then(({ message, name }) => {
      cy.get('input[placeholder="Your Email"]').type('invalid email');
      cy.get('input[placeholder="Full Name"]').type(name);
      cy.get('textarea[placeholder="Message"]').type(message);

      cy.get('[data-testid=form-submit]').click();
      cy.contains('Must be a valid email').should('be.visible');
    });
  });

  it('should not send data if email is invalid', () => {
    cy.visit('/contact');

    cy.fixture('user').then(({ message, name }) => {
      cy.get('input[placeholder="Your Email"]').type('invalid email');
      cy.get('input[placeholder="Full Name"]').type(name);
      cy.get('textarea[placeholder="Message"]').type(message);

      cy.get('[data-testid=form-submit]').click();
      cy.contains('Must be a valid email').should('be.visible');
    });
  });

  it('should not send data if name is invalid', () => {
    cy.visit('/contact');

    cy.fixture('user').then(({ message, email }) => {
      cy.get('input[placeholder="Your Email"]').type(email);
      cy.get('input[placeholder="Full Name"]').type('a');
      cy.get('textarea[placeholder="Message"]').type(message);

      cy.get('[data-testid=form-submit]').click();
      cy.contains('fullName must be at least 2 characters').should(
        'be.visible',
      );
    });
  });

  it('should not send data if message is empty', () => {
    cy.visit('/contact');

    cy.fixture('user').then(({ message, email }) => {
      cy.get('input[placeholder="Your Email"]').type(email);
      cy.get('input[placeholder="Full Name"]').type(message);

      cy.get('[data-testid=form-submit]').click();
      cy.contains('This field is required').should('be.visible');
    });
  });
});
