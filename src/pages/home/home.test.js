import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import Home from '.'
import appData from '../../../public/data.json'
import { EarthquakeContext } from '../../context'
import '@testing-library/jest-dom'

test('Home page is rendered and title is valid', () => {
  render(
    <Router>
      <EarthquakeContext.Provider value={appData}>
        <Home />
      </EarthquakeContext.Provider>
    </Router>
  )

  expect(screen.getByTestId('home-title')).toHaveTextContent(
    'USGS All Earthquakes, Past Hour'
  )
})
