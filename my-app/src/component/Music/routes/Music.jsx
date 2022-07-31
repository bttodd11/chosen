import { React, useState, useEffect } from "react";
import { Container, Col, Row } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import PreLoader from '../../../img/loader.png'
import tidal from '../../../img/tidal.png';
import spotify from '../../../img/spotify.png';
import apple from '../../../img/apple.png';
import chosenImage from '../../../img/chosenImage';
import "./Music.css";
import $ from 'jquery';

const Music = () => {
    const [preLoader, removePreLoader] = useState(true);

    useEffect(() => {

        document.querySelector("#youtubeVideo", "#youtubeVideo1", "#youtubeVide2").addEventListener("load", function (e) {
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
            <div id="musicSection">
                <p className="title">Chosen</p>
                <div className="iconSection">
                    <a href="https://tidal.com/browse/artist/10245007"><img title="navIcon" src={tidal} alt="my-img" class="socialIconMusic" /></a>
                    <a href="https://music.apple.com/us/artist/ericthechosen/1342828361"><img title="navIcon" src={apple} alt="my-img" class="socialIconMusic" /></a>
                    <a href="https://open.spotify.com/artist/0vTq8DS8a3bRmf0U1hEuCa?si=cYGGpX2HQ1eovfjZlWF6VQ"><img title="navIcon" src={spotify} alt="my-img" class="socialIconMusic" /></a>
                </div>
                <img className="mainImage" src={chosenImage}></img>
                <div className="mediaSection">
                    <p className="mediaTitle">Media</p>
                    <Container fluid>
                        <Row>
                            <Col sm="1" md="4" className="videoSection">
                                <iframe id="youtubeVideo" allowFullScreen="true" src="https://www.youtube.com/embed/UbfSjp4Sg4A" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </Col>
                            <Col sm="1" md="4" className="videoSection">
                                <iframe id="youtubeVideo1" allowFullScreen="true" src="https://www.youtube.com/embed/iN0-W_N4a24" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </Col>
                            <Col sm="1" md="4" className="videoSection">
                                <iframe id="youtubeVideo2" allowFullScreen="true" src="https://www.youtube.com/embed/z1fD3CginDk" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <a> <Link to="/"><p className="homeText">Home</p> </Link></a>
            </div>
        </div>
    )
}


export default Music;
