import {React, useState, useEffect} from "react";
import PreLoader from '../../../img/loader.png'
import { Outlet, Link } from 'react-router-dom';
import $ from 'jquery'
import "./Cloth.css";


const Cloth = () => {
  const [preLoader, removePreLoader] = useState(true);


  useEffect(() => {

    // A $( document ).ready() block.
    $(document).ready(function () {
      $('#preLoaderSection').hide()
      $('#musicSection').show();
    });
  })


  return (
    <div>
      <div id="preLoaderSection">
        <img className="preLoaderImage" src={PreLoader}></img>
        <p className="loadingText">Loading...</p>
      </div>
      <div id="clothSection">
        <p className="launchTitle">Launching 10.22</p>
        <a> <Link to="/"><p className="homeText">Home</p></Link></a>
      </div>
    </div>
  )

}

export default Cloth;
