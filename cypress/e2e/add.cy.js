describe('ToDo list', () => {
  // New Feature for Todo App
  // Input todo description to be submitted as part of a form
  beforeEach(()=>{
    cy.eyesOpen({
      appName: 'tau-todo-app',
      testName: Cypress.currentTest.title
    })
  })

  it('should store input text as value', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="todo-input"]').type('first todo item')
    cy.get('[data-testid="todo-input"]').should('have.value','first todo item')
    cy.eyesCheckWindow({
      tag: 'add input',
      target: "region",
      matchLevel: "Strict",
      selector:{
        type: 'name',
        selector: "add_todo"
      }
    })
  })

  afterEach(() =>{
    cy.eyesClose()
  })
})