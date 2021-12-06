import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchPaises from './SearchPaises';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Index = () => (
  <Router>
    <Routes>
      {/* Exact match to avoid 
          overriding other routes */}
      <Route path="/" element={<App/>} />
      <Route path="/SearchPaises" element={<SearchPaises/>} />
    </Routes>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
