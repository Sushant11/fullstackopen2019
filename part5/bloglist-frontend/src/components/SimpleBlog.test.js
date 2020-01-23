/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

test('renders Content', () => {
  const blog = {
    title: 'This a Blog Post',
    author: 'SC',
    url: 'asdsds.cas'
  }

  const component = render(<SimpleBlog blog={blog} />)

  expect(component.container).toHaveTextContent('This a Blog Post')
})

test('clicking the button calls event handler once', () => {
  const blog = {
    title: 'This a Blog Post',
    author: 'SC',
    url: 'asdsds.cas'
  }

  const mockHandler = jest.fn()

  const { getByText } = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  )

  const button = getByText('like')
  fireEvent.click(button)

  expect(mockHandler.mock.calls.length).toBe(1)
})