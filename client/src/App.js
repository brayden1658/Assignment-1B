import React/*, { useRef }*/ from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate/*, useLocation*/ } from "react-router-dom";
import "./index.css"

import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article";
import NotFoundPage from "./pages/404";

/**
 * todo(Ratchet7x5): on NPM START, you should be taken to /Home page
 * Current issue: you are taken to the ERROR 404 page instead. 
 */
/**
 * Current issue: The Webpage directly takes you to the 404 page instead of the Home page. 
 * Code Author: Tarun Ramachandran
 * Code Reviewer: Brayden Wallace
 */
const App = () => {
  return (
    <Router >
      <div>
        <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
        <ul className="header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/SEPractice">Select the Practice</NavLink>
          </li>
          <li>
            <NavLink to="/SubmitArticle">Submit an Article</NavLink>
          </li>
        </ul>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/SEPractice" element={<SEPractice />} />
            <Route path="/SubmitArticle" element={<SubmitArticle />} />
            {/* All other paths should redirect to NotFoundPage */}
            <Route exact path="/404" element={<NotFoundPage />} />
            <Route path="/*" element={<Navigate to="/404" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;