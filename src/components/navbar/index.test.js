import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import Navbar from '.'
import '@testing-library/jest-dom'

test('Navbar should render properly with title and welcome', async () => {
  render(
    <Router>
      <Navbar
        title={'Fake Title'}
        logoImage={'fakelogo.png'}
        firstName={'Mona'}
      />
    </Router>
  )

  expect(screen.getByTestId('navbar-title')).toHaveTextContent('Fake Title')
  expect(screen.getByTestId('navbar-welcome')).toHaveTextContent('Welcome Mona')
})
