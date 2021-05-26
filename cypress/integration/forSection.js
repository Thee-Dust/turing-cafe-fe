describe("Form", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to type into name section', () => {
    cy.get('input[name=nameInput]').type('Dustin')
  })

  it('should be able to select date')
})