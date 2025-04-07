describe('Fetch href values in mobile view', () => {
    it('should navigate to Aluminate for education and get href values', () => {
      
      // Set the viewport to mobile dimensions
      cy.viewport('iphone-6');

      //Just a test
  
      // Visit the mobile site hello
      cy.visit('https://aluminati.net');
  
      // Navigate to Products → Aluminate for education
      cy.get('.awb-icon-bars').click();
      
      //Used ({ force: true }) to simulate the click on the dropdown element
      cy.get('#mobile-menu-main-menu-1 > [data-item-id="2862"] > .sub-menu > :nth-child(2) > .fusion-bar-highlight').click({ force: true });
      cy.wait(5000)
      cy.get('#sebree-NoButtonElement--CRDnRia95kTeRO3o2xQN').click()
      
      // Get all anchor tags and extract href values
      cy.get('a').each(($anchor) => {
      const href = $anchor.attr('href');
      
      // Output href values to the console
      cy.log(href);
      });
    })
  })
  
