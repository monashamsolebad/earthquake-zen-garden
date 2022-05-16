import React, { useEffect, useContext, useState } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { SortIndicator } from 'Src/components/sortindicator'
import { EarthquakeContext } from 'Src/context'
import { TIME_FORMAT } from 'Src/App'

const DATA_TYPES = { title: 'Title', mag: 'Magnitude', time: 'Time' }

const Home = () => {
  const context = useContext(EarthquakeContext)
  const defaultColumnKey = Object.keys(DATA_TYPES)[1]
  const { data } = context || {}
  const [sortedField, setSortedField] = useState(defaultColumnKey)
  const [sortedData, setSortedData] = useState(data)
  const [isSortedAsc, setIsSortedAsc] = useState(false)

  useEffect(() => {
    sortFeatures(sortedField, isSortedAsc)
  }, [])

  const handleToggleSort = (field) => () => {
    toggleSort(field)
  }

  const toggleSort = (field) => {
    const shouldSortAsec = sortedField === field ? !isSortedAsc : true // default sort is Asec for new columns
    setSortedField(field)
    setIsSortedAsc(shouldSortAsec)
    sortFeatures(field, shouldSortAsec)
  }

  const onKeyPressHandler = (field) => (e) => {
    if (e.keyCode === 0) {
      console.log('field is, lets sort by : ', field)
      toggleSort(field)
    }
  }

  const sortFeatures = (field, isAsc) => {
    const updatedSortData = { ...sortedData }
    updatedSortData?.features?.sort((a, b) => {
      if (a.properties[field] < b.properties[field]) {
        return isAsc ? -1 : 1
      }
      if (a.properties[field] > b.properties[field]) {
        return isAsc ? 1 : -1
      }
      return 0
    })
    setSortedData(updatedSortData)
  }

  if (!sortedData) {
    return <div>Loading...</div>
  }
  return (
    <div className={styles.home}>
      <h3 data-testid="home-title" className={styles.heading}>
        {sortedData?.metadata?.title}
      </h3>
      <div>
        <table>
          <thead>
            <tr>
              {Object.keys(DATA_TYPES).map((dataTypeKey, index) => {
                return (
                  <th key={`column-${index}`}>
                    <span
                      tabIndex={0}
                      onKeyPress={onKeyPressHandler(dataTypeKey)}
                      role="button"
                      onClick={handleToggleSort(dataTypeKey)}
                    >
                      {DATA_TYPES[dataTypeKey]}
                      {sortedField === dataTypeKey && (
                        <SortIndicator isUp={isSortedAsc} />
                      )}
                    </span>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {sortedData?.features?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Link to={'/detail/' + item.id} state={item.id}>
                      {item.properties?.title}
                    </Link>
                  </td>
                  <td className={styles.center}>{item.properties?.mag}</td>
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
