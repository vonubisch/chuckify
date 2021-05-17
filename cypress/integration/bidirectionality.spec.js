/// <reference types="cypress" />

context('Bidirectionality', () => {
  
  beforeEach(() => {
    cy.visit('/');
    cy.get('#button-bidirectionality').as('buttonToggle');
  });
  
  it('should be default LTR', () => {
    cy.get('html').invoke('attr', 'dir').should('equal', 'ltr');
  });
  
  it('should be able to enable RTL', () => {
    cy.get('@buttonToggle').click();
    cy.get('html').invoke('attr', 'dir').should('equal', 'rtl');
  });

  it('should be able to toggle RTL/LTR', () => {
    cy.get('@buttonToggle').click();
    cy.get('html').invoke('attr', 'dir').should('equal', 'rtl');

    cy.get('@buttonToggle').click();
    cy.get('html').invoke('attr', 'dir').should('equal', 'ltr');
  });

  it('should render the quote LTR regardless', () => {
    cy.get('@buttonToggle').click();
    cy.get('html').invoke('attr', 'dir').should('equal', 'rtl');
    cy.get('.Typewriter__wrapper').invoke('css', 'direction').should('equal', 'ltr');
  });

});