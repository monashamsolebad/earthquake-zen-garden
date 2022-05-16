import React, { useContext } from 'react'
import styles from './styles.module.css'
import { EarthquakeContext } from 'Src/context'
const Profile = () => {
  const context = useContext(EarthquakeContext)
  const { profile } = context || {}
  if (!profile) {
    return <div>Loading...</div>
  }
  return (
    <div className={styles.profileContainer}>
      <h3 className={styles.heading}>Profile</h3>
      <div className={styles.dataContainer}>
        <div>
          <img
            className={styles.profileImage}
            src={profile?.avatarImage}
            alt="profile image"
          ></img>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td>First name</td>
                <td>{profile?.firstName}</td>
              </tr>
              <tr>
                <td>Last name</td>
                <td>{profile?.lastName}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{profile?.phone}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{profile?.email}</td>
              </tr>
              <tr>
                <td className={styles.bioTitle}>Bio</td>
                <td className={styles.bio}>{profile?.bio}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default Profile
