import {React, useState, useEffect} from "react";
import { Container, Col, Row } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import PreLoader from '../../../img/loader.png'
import "./Music.css";
import $ from 'jquery';

const Music = () => {
    const [preLoader, removePreLoader] = useState(true);


    useEffect(() => {


        document.querySelector("#youtubeVideo", "#youtubeVideo1", "#youtubeVide2").addEventListener( "load", function(e) {
            $('#preLoaderSection').hide()
            $('#musicSection').show(); 
        } );
        
    })   


    return (
        
        <div>
            <div id="preLoaderSection">
                <img className="preLoaderImage" src={PreLoader}></img>
                <p className="loadingText">Loading...</p>
            </div>
            <div id="musicSection">
                <h1>Music</h1>
                <Container>
                    <Row>
                        <Col md="4" className="videoSection">
                            <iframe id="youtubeVideo" allowFullScreen="true" src="https://www.youtube.com/embed/UbfSjp4Sg4A" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </Col>
                        <Col md="4" className="videoSection">
                            <iframe id="youtubeVideo1" allowFullScreen="true" src="https://www.youtube.com/embed/iN0-W_N4a24" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                        </Col>
                        <Col md="4" className="videoSection">
                            <iframe id="youtubeVideo2" allowFullScreen="true" src="https://www.youtube.com/embed/z1fD3CginDk" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                        </Col>
                    </Row>
                </Container>
              <a> <Link to="/"><p className="homeText">Home</p> </Link></a>
            </div>
        </div>
    )
}


export default Music;
