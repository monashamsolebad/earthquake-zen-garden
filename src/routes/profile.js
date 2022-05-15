import React, { useEffect, useState } from "react";
import "./profile.css";
const Profile = () => {
  const [data, setData] = useState(null);
  const getData = () => {
    fetch("data.json").then(
      function (res) {
        return res.json();
      }).then(function (data) {
        setData(data)
      }).catch(
        function (err) {
          console.log(err, ' error')
        }
      )
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="profile-container">
      <h3>Profile</h3>
      <div className="data-container">
        <div><img className="profile-image" src={data?.profile?.avatarImage} alt="profile image"></img></div>
        <div>
          <table>

            <tbody>
              <tr>
                <td>First name</td>
                <td>{data?.profile?.firstName}</td>
              </tr>
              <tr>
                <td>Last name</td>
                <td>{data?.profile?.lastName}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{data?.profile?.phone}</td>

              </tr>
              <tr>
                <td>Email</td>
                <td>{data?.profile?.email}</td>

              </tr>
              <tr>
                <td className="valign-top">Bio</td>
                <td className="bio">{data?.profile?.bio}</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Profile;
