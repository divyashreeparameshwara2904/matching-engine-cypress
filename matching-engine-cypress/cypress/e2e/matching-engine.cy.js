describe('Matching Engine - Solutions navigation', () => {
  const expectedSolutions = [
    'Repertoire management',
    'Repertoire and usage matching',
    'Data ingestion and integration',
    'Distribution processing',
    'Member management',
    'Member self service'
  ];

  const distributionContent = [
    'Distribute royalty payments quickly',
    'Provide full detail of music usage to members',
    'Reduce cost-to-distribution ratios.'
  ];

  beforeEach(() => {
    cy.visit('/');
  });

  it('expands Solutions and displays the expected Solutions list', () => {
    cy.get('header')
      .contains(/^Solutions$/)
      .click();

    expectedSolutions.forEach((solution) => {
      cy.contains('a', solution)
        .should('be.visible');
    });
  });

  it('opens Distribution Processing and validates All-in-one solution for scale', () => {
    cy.get('header')
      .contains(/^Solutions$/)
      .click();

    cy.contains('a', 'Distribution processing')
      .should('be.visible')
      .click();

    cy.url().should('include', '/Music-and-copyright-solutions/Distribution-processing');

    cy.contains('h2', 'All-in-one solution for scale')
      .scrollIntoView()
      .should('be.visible');

    distributionContent.forEach((content) => {
      cy.contains(content).should('be.visible');
    });
  });
});
