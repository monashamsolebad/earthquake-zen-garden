import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Detail from "./routes/detail";
import Home from "./routes/home";
import Profile from "./routes/profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="detail" element={<Detail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
