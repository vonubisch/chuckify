/// <reference types="cypress" />

import { BASE_URL } from '../constants';

context('Navigation', () => {
  
  beforeEach(() => {
    cy.visit(BASE_URL);
    cy.get('#header a[href*="credits"]').as('navItem');
  });
  
  it('renders home', () => {
    cy.location('pathname').should('equal', '/');
  });
  
  it('visit a page', () => {
    cy.get('@navItem').click();
    cy.location('pathname').should('include', 'credits');
  });

  it('visit a page and go back', () => {
    cy.get('@navItem').click();
    cy.location('pathname').should('include', 'credits');

    cy.go('back');
    cy.location('pathname').should('equal', '/');
  });

  it('visit a page, go back and go forward', () => {
    cy.get('@navItem').click();
    cy.location('pathname').should('include', 'credits');

    cy.go('back');
    cy.location('pathname').should('equal', '/');

    cy.go('forward');
    cy.location('pathname').should('include', 'credits');
  });

});