import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact.js";
import Match from "./components/Match.js";
import Home from "./components/home.js";
import TeamId from "./components/Team/TeamId.js";
import TeamInfo1 from "./components/Team/InfoTeam1.js";
// import TeamId from "./components/Team/TeamId.js";
import MatchId from "./components/Match/MatchId.js";
import MatchHome from "./components/Match/MatchIndex.js";
import Shop from "./components/Shop.js";
import TeamIndex from "./components/Team/TeamIndex.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          {/* <Route path="home" element={<Home />}></Route>  */}
          <Route path="match" element={<Match />}>
            <Route path=":matchId" element={<MatchId />} />
            <Route index element={<MatchHome />} />
          </Route>
          <Route path="team" element={<Contact />}>
            <Route index element={<TeamIndex />} />
            {/* <Route path=":teamId" element={<TeamId />} /> */}
          </Route>
          <Route path="shop" element={<Shop />}></Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
