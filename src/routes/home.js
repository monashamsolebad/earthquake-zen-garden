import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import { EarthquakeContext } from '../context'
import moment from 'moment'
import { TIME_FORMAT } from '../App'

const Home = () => {
  const context = useContext(EarthquakeContext)
  const { data } = context || {}
  const [sortedField, setSortedField] = useState('title')
  const [sortDirection, setSortDirection] = useState('asc')

  const toggleSort = (field) => {
    let newDirection = 'asc'
    if (sortedField === field) {
      newDirection = toggleSortDirection(sortDirection)
    }

    setSortedField(field)
    setSortDirection(newDirection)
    sortFeatures(field, newDirection)
  }
  const toggleSortDirection = (direction) => {
    return direction === 'asc' ? 'desc' : 'asc'
  }
  const sortFeatures = (field, direction) => {
    console.log(`sorting with ${field} ${direction}`)
    data?.features.sort((a, b) => {
      if (a.properties[field] < b.properties[field]) {
        return direction === 'asc' ? -1 : 1
      }
      if (a.properties[field] > b.properties[field]) {
        return direction === 'asc' ? 1 : -1
      }
      return 0
    })
  }

  return (
    <div className="home">
      <h3>{data?.metadata?.title}</h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>
                <span onClick={() => toggleSort('title')}>Title</span>
              </th>
              <th>
                <span onClick={() => toggleSort('mag')}>Magnitude</span>
              </th>
              <th>
                <span onClick={() => toggleSort('time')}>Time</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.features?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Link to={'/detail/' + item.id} state={item.id}>
                      {item.properties?.title}
                    </Link>
                  </td>
                  <td className="text-center">{item.properties?.mag}</td>
                  <td>{moment(item.properties?.time).format(TIME_FORMAT)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Home
