import "./Music.css";
import React from "react";
import { useEffect, useState } from "react";
import { Container, Col, Row } from 'react-bootstrap';
import playVideo from '../../../img/play.png';

const Music = () => {

    let [videos, setVideos] = useState([]);
    let playlistId = "UUwwrP7TPQmlkFHCWdCcYNpw";

    const youtubeFetch = async (call) => {

        const http = new XMLHttpRequest();
        const url = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&playlistId=" + playlistId + "&key=AIzaSyBd26sX_fII61osu5b29kaOlB5odp9uMW4"

        http.open("GET", url);
        http.send();

        http.onload = function () {
            call(http.responseText)
        };
    }

    function mycallback(data) {
        setVideos(JSON.parse(data).items)
        console.log(videos)
    }

    useEffect(() => {
        youtubeFetch(mycallback)
    }, [videos.length])

    return (
        <div id="musicSection">
            <h1>Music</h1>
            <Container>
                <Row>
                    {videos.length !== 0 ? (
                        videos.map((vid) => (
                            <Col md="4">
                                <div id="videoSection">
                                    <h5 className="videoTitle">{vid.snippet.title}</h5>
                                    <div className="imageDiv">
                                        <img className="playVideo" src={playVideo} />
                                    {vid.snippet.thumbnails.maxres ? <img className="thumbnail" src={vid.snippet.thumbnails.maxres.url} /> : <img className="thumbnail" src={vid.snippet.thumbnails.default.url} />}
                                    </div>
                                </div>
                            </Col>
                        ))
                    ) : null}
                </Row>
            </Container>

        </div>
    )
}


export default Music;
