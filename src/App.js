import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from 'Components/navbar'
import './App.css'

import { EarthquakeContext } from './context'

export const TIME_FORMAT = 'MMM DD, YYYY, HH:mm A'

export const App = () => {
  const [appData, setAppData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch('/data.json')
        const jsonData = await data.json()
        setAppData(jsonData)
      } catch (e) {
        console.error(e)
      }
    }

    getData()
  }, [])

  const { site, profile } = appData || {}
  const { title, logoImage } = site || {}

  if (!appData) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Navbar
        title={title}
        logoImage={logoImage}
        firstName={profile?.firstName}
      />

      <EarthquakeContext.Provider value={appData}>
        <Outlet />
      </EarthquakeContext.Provider>
    </>
  )
}
