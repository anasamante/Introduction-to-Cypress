/// <reference types="cypress" />

describe('todo actions', () => {
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
        cy.get('.new-todo', { timeout: 6000 }).type('Clean {enter}')
    })

    it('should be able add a new to do item to the list, mark as completed, and clean the list', () => {
        cy.get('label').should('have.text', 'Clean')
        cy.get('.toggle').should('not.be.checked')
    })

    it('should be able to mark a todo item as completed', () => {
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })

    it('should be able to clear the list', () => {
        cy.get('.toggle').click()
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')
    })
})