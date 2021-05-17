/// <reference types="cypress" />

import { BASE_URL } from '../constants';

context('Quotes', () => {

  it('should render categories', () => {
    cy.intercept('GET', '*/categories').as('categories');
    cy.visit(BASE_URL);
    cy.wait('@categories').should(({ response }) => {
      expect(response.statusCode).to.eq(200);
      expect(response.body).to.be.a('array').and.have.length.greaterThan(0);
    });
    cy.get('#categories').find('li').its('length').should('be.gte', 0);
  });

  it('should render initial quote', () => {
    cy.intercept('GET', '*/random').as('random');
    cy.visit(BASE_URL);
    cy.wait('@random').should(({ response }) => {
      expect(response.statusCode).to.eq(200);
      expect(response.body.value).to.be.a('string').and.have.length.greaterThan(0);
    });
    cy.get('#quote').invoke('attr', 'data-value').should('not.be.empty');
  });

  it('should render new quote', () => {
    cy.intercept('GET', '*/random').as('random');
    cy.visit(BASE_URL);
    cy.get('#quote').then(($quote) => {
      const value = $quote.attr('data-value');
      cy.get('#button-random').click();
      cy.wait('@random').should(({ response }) => {
        expect(response.statusCode).to.eq(200);
        expect(response.body.value).to.be.a('string').and.have.length.greaterThan(0);
      });
      cy.get('#quote').should(($quote2) => {
        expect($quote2.attr('data-value')).not.to.eq(value)
      });
    });
  });

  it('should render quote from category', () => {
    cy.intercept('GET', '*/random?category=*').as('randomCategory');
    cy.visit(BASE_URL);
    cy.get('#quote').then(($quote) => {
      const value = $quote.attr('data-value');
      cy.get('#categories button').first().click();
      cy.wait('@randomCategory').should(({ response }) => {
        expect(response.statusCode).to.eq(200);
        expect(response.body.value).to.be.a('string').and.have.length.greaterThan(0);
      });
      cy.get('#quote').should(($quote2) => {
        expect($quote2.attr('data-value')).not.to.eq(value)
      });
    });
  });

  it('should search for quote and generate next', () => {
    cy.intercept('GET', '*/search?query=*').as('search');
    cy.visit(BASE_URL);
    cy.get('#searchbar').type('norris').should('have.value', 'norris');
    cy.get('#search').submit();
    cy.wait('@search').should(({ response }) => {
      expect(response.statusCode).to.eq(200);
      expect(response.body.result).to.be.a('array').and.have.length.greaterThan(0);
    })
    cy.get('#button-next').should('exist');
    cy.get('#quote').then(($quote) => {
      const value = $quote.attr('data-value');
      cy.get('#button-next').click();
      cy.get('#quote').should(($quote2) => {
        expect($quote2.attr('data-value')).not.to.eq(value)
      });
    });
  });

});