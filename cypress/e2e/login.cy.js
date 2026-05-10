describe('Course Selling App - Auth Tests', () => {
  
  it('TC_001 - Should load the homepage successfully', () => {
    cy.visit('https://course-selling-app2.netlify.app/')
    cy.url().should('include', 'netlify.app')
  })

  it('TC_002 - Should navigate to login page', () => {
    cy.visit('https://course-selling-app2.netlify.app/')
    cy.contains('Login').click()
    cy.url().should('include', 'login')
  })

  it('TC_003 - Invalid login should not redirect to dashboard', () => {
    cy.visit('https://course-selling-app2.netlify.app/login')
    cy.get('input[type="text"]').type('wronguser')
    cy.get('input[type="password"]').type('wrongpassword')
    cy.get('button[type="submit"]').click()
    cy.url().should('not.include', 'dashboard')
  })

})