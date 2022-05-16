import React, { useContext } from 'react'
import './profile.css'
import { EarthquakeContext } from '../context'
const Profile = () => {
  const context = useContext(EarthquakeContext)
  const { profile } = context || {}
  return (
    <div className="profile-container">
      <h3>Profile</h3>
      <div className="data-container">
        <div>
          <img
            className="profile-image"
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
                <td className="valign-top">Bio</td>
                <td className="bio">{profile?.bio}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default Profile
