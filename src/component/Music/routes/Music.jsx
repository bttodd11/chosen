import "./Music.css";
import React from "react";
import { useEffect, useState } from "react";
import { Container, Col, Row } from 'react-bootstrap';


const Music = () => {


    return (
        <div id="musicSection">
            <h1>Music</h1>
            <Container>
                <Row>
                    <Col md="4" className="videoSection">
                    <iframe width="300" height="300" src="https://www.youtube.com/embed/UbfSjp4Sg4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=false; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col md="4" className="videoSection">
                    <iframe width="300" height="300" src="https://www.youtube.com/embed/iN0-W_N4a24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=false; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                    <Col md="4" className="videoSection">
                    <iframe width="300" height="300" src="https://www.youtube.com/embed/z1fD3CginDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=false; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}


export default Music;
