describe('DuckDuckGo → Cypress.io flow (leboncy)', () => {
  it('search for cypress io, discard firstresult and click on the next one', () => {
    
    cy.visit('https://duckduckgo.com')

    
    cy.get('input[name="q"]').type('Cypress.io{enter}')

    cy.get('ol.react-results--main > li', { timeout: 10000 })
  .should('have.length.greaterThan', 1)

  cy.get('ol.react-results--main > li', { timeout: 10000 })
  .should('have.length.greaterThan', 1)

// delete 1
cy.get('ol.react-results--main > li').first().invoke('remove')

// click 2
cy.get('ol.react-results--main > li')
  .eq(1)
  .find('a[href^="https://www.cypress.io"]')    
  .first()
  .invoke('removeAttr', 'target')                // same window
  .invoke('css', 'pointer-events', 'auto')       // due to inheritance
  .click({ force: true })                       

cy.origin('https://www.cypress.io', () => {
  
  
  // URL
  cy.url().should('include', 'cypress.io')

  // elem
  cy.get('header').should('be.visible')
  cy.get('nav').should('be.visible')
  cy.get('footer').should('be.visible')
  cy.screenshot('ultimo-step-cypress-io', { capture: 'viewport' })
})
})
})