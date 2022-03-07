import "./Music.css";
import React from "react";
import { useEffect } from "react";

const Music = () => {

    const youtubeFetch = () => {

        const url = "https://www.googleapis.com/youtube/v3/channels?&key=AIzaSyBd26sX_fII61osu5b29kaOlB5odp9uMW4&maxResults=5"
        fetch(url).then(response => console.log(response))
    }


    useEffect(() => {

        youtubeFetch()
    })

return(
<h1>Music</h1>
)
}


export default Music;
