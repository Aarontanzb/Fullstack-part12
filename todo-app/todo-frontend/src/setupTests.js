// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import TodoList from './TodoList'

describe('TodoList', () => {
  it('renders a single Todo', () => {
    const todo = { id: '1', text: 'Buy groceries', done: false }
    const deleteTodo = jest.fn()
    const completeTodo = jest.fn()
    const { getByText } = render(
      <TodoList
        todos={[todo]}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
    )

    // Assert that the Todo text is rendered
    expect(getByText('Buy groceries')).toBeInTheDocument()

    // Assert that the "Set as done" button is rendered
    const setAsDoneButton = getByText('Set as done')
    expect(setAsDoneButton).toBeInTheDocument()

    // Simulate a click on the "Set as done" button
    fireEvent.click(setAsDoneButton)

    // Assert that the "completeTodo" function is called with the correct argument
    expect(completeTodo).toHaveBeenCalledWith(todo)

    // Assert that the "Delete" button is rendered
    const deleteButton = getByText('Delete')
    expect(deleteButton).toBeInTheDocument()

    // Simulate a click on the "Delete" button
    fireEvent.click(deleteButton)

    // Assert that the "deleteTodo" function is called with the correct argument
    expect(deleteTodo).toHaveBeenCalledWith(todo)
  })
})
