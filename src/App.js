import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import "./App.css";

export default function App() {

  const [data, setData] = useState(null);
  const getData = () => {
    fetch("data.json").then(
      function (res) {
        return res.json();
      }).then(function (data) {
        //console.log(data)
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
    <div>
      {<Navbar title={data?.site?.title} logoImage={data?.site?.logoImage} firstName={data?.profile?.firstName}/>}

      <Outlet />
    </div>
  );
}
