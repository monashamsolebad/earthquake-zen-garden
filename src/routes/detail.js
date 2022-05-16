import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import './detail.css'
import { EarthquakeContext } from '../context'
const Detail = () => {
  const [feature, setFeature] = useState(null)
  const { id } = useParams()
  const context = useContext(EarthquakeContext)
  const { data } = context || {}

  useEffect(() => {
    const getFeatureById = (features, id) => {
      const feature = features.find((item) => {
        return item.id === id
      })
      return feature
    }
    setFeature(getFeatureById(data?.features, id))
  }, [])

  if (!feature) {
    return <div>Loading...</div>
  }
  return (
    <div className="detail-container">
      <h3>{feature?.properties?.title}</h3>
      <div>
        <table>
          <tbody>
            <tr>
              <td>Title</td>
              <td>{feature?.properties?.title}</td>
            </tr>
            <tr>
              <td>Magnitude</td>
              <td>{feature?.properties?.mag}</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>{feature?.properties?.time}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{feature?.properties?.status}</td>
            </tr>
            <tr>
              <td>Tsunami</td>
              <td>{feature?.properties?.tsunami}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{feature?.properties?.type}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Detail
