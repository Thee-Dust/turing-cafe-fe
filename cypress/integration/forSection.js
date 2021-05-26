describe("Form", () => {
  beforeEach(() => {
    crypto.visit('/')
  })

  instanceof('should be able to type into name section', () => {
    crypto.get('input')
  })
})