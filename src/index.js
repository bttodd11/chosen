import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from "react-router-dom";
import Music from './component/Music/routes/Music.jsx';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="music" element={<Music />} />
    </Routes>
    </HashRouter>
  </React.StrictMode>,
 rootElement
);

