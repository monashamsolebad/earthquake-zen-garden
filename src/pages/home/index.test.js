import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '.'
import '@testing-library/jest-dom'

test('home should have a heading', async () => {
  render(<Home />)

  expect(screen.getByRole('heading')).toHaveTextContent(
    'USGS All Earthquakes, Past Hour'
  )
})
