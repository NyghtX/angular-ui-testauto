it('loads examples', () => {
  cy.visit('/');
  cy.contains('weatherly');
});
