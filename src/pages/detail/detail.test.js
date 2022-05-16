import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom'
import Detail from '.'
import appData from '../../../public/data.json'
import { EarthquakeContext } from '../../context'
import '@testing-library/jest-dom'

test('Details page is rendered correctly', () => {
  render(
    <Router initialEntries={['/detail/nc72999021']}>
      <Routes>
        <Route path="detail">
          <Route
            path=":id"
            element={
              <EarthquakeContext.Provider value={appData}>
                <Detail />
              </EarthquakeContext.Provider>
            }
          ></Route>
        </Route>
      </Routes>
    </Router>
  )

  expect(screen.getByTestId('detail-title')).toHaveTextContent(
    'M 1.2 - 3km ENE of The Geysers, CA'
  )
})
