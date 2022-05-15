import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "./detail.css"
const Detail = () => {
  const [feature, setFeature] = useState(null);
  const { id } = useParams();

  const getData = () => {
    fetch("../data.json").then(
      function (res) {
        return res.json();
      }).then(function (result) {
        setFeature(getFeatureById(result, id));
      }).catch(
        function (err) {
          console.log(err, ' error');
        }
      )
  }
  const getFeatureById = (result, id) => {
    const feature = result?.data?.features.find(item => { return item.id === id });
    return feature;
  }
  useEffect(() => {
    getData()
  }, []);


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
  );
};
export default Detail;
