import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import Profile from '.'
import appData from '../../../public/data.json'
import { EarthquakeContext } from '../../context'
import '@testing-library/jest-dom'

test('Profile page is rendered and first name is valid', () => {
  render(
    <Router>
      <EarthquakeContext.Provider value={appData}>
        <Profile />
      </EarthquakeContext.Provider>
    </Router>
  )

  expect(screen.getByTestId('profile-firstName')).toHaveTextContent('Sally')
})
