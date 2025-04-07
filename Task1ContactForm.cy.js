describe('Contact Form Aluminati', () => {
    it('Complete the contact form', () => {
      // Visit the website
      cy.visit('https://aluminati.net')
  
      // Click on the Contact link
      cy.get('#menu-item-17180').click();

      //Confirming correct URL
      cy.url().should('eq', 'https://www.aluminati.net/contact/')

      //Assert Elements on the page to ensure we on the correct page
      cy.get('.content-box-column-1').should('be.visible')
      cy.get('.content-box-column-2').should('be.visible')
  
      // Fill out the form
      cy.get('.contactUsForm > :nth-child(1)').type('Leroy Smith')
      cy.get('.contactUsForm > :nth-child(2)').type('lsmith1872gmail.com')
      cy.get('.contactUsForm > :nth-child(3)').type('0765371887')
      cy.get('.contactUsForm > :nth-child(4)').type('The Kop End')
      cy.get('.contactUsForm > :nth-child(5)').type('QA Engineer')
      cy.get('.contactUsForm > :nth-child(6)').type('I am just doing a quick test')

      //Ensuring submit button is visible on page
      cy.contains('Submit').should('be.visible');
     
    });
  });