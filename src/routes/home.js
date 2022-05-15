import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  const [result, setResult] = useState(null);
  const getData = () => {
    fetch("data.json").then(
      function (res) {
        return res.json();
      }).then(function (result) {
        setResult(result)
      }).catch(
        function (err) {
          console.log(err, ' error')
        }
      )
  }
  useEffect(() => {
    getData()
  }, []);

  return (

    <div className="home-container">

      <h3>{result?.data?.metadata?.title}</h3>

      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Magnitude</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {result?.data?.features?.map((item, index) => {
              return <tr key={index}>
                <td><Link to={"/detail/" + item.id} state={item.id}>{item.properties?.title}</Link></td>
                <td className="text-center">{item.properties?.mag}</td>
                <td>{item.properties?.time}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
