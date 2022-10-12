import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import Header from "./component/Header";
import Home from './component/Pages/Home';

function App() {

ReactDOM.render(
  <React.StrictMode>
       <Router>
          <Routes>
          <Route exact path="/" element={<Header />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
}

export default App;
