describe("Form", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to type into name section', () => {
    cy.get('input[name=nameInput]').type('Dustin')
  })

  it('should be able to select date', () => {
    cy.get('input[name=dateInput]').type('2021-04-26')
  })

  it('should be able to select a time', () => {
    cy.get('input[name=timeInput]').type('11:30')
  })

  it('should be able to select number of guest', () => {
    cy.get('input[name=guestInput]').type('4')
  })

  it('should be able to make a new reservation', () => {
    cy.get('input[name=nameInput]').type('Dustin')
    cy.get('input[name=dateInput]').type('2021-04-26')
    cy.get('input[name=timeInput]').type('11:30')
    cy.get('input[name=guestInput]').type('4')
    cy.get('input[type=submit]').click()
    cy.get('.card-display').children().should('have.length', 10)
  })
}) 