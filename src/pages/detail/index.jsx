import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import styles from './styles.module.css'
import { EarthquakeContext } from 'Src/context'
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
    return <div className={styles.notFound}>Item not found</div>
  }
  return (
    <div className={styles.detailContainer}>
      <h3 data-testid="detail-title" className={styles.heading}>
        {feature?.properties?.title}
      </h3>
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
