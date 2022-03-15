import "./Music.css";
import React from "react";
import { useEffect } from "react";

const Music = () => {

    const youtubeFetch = () => {
        let videos
        const http = new XMLHttpRequest();
        const url = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCwwrP7TPQmlkFHCWdCcYNpw&key=AIzaSyBd26sX_fII61osu5b29kaOlB5odp9uMW4"

        http.open("GET", url);
        http.send();

        http.onreadystatechange = (e) => {
            if(http.readyState === XMLHttpRequest.DONE){

                let status = http.status;
                if(status === 0 || status >= 200 && status < 400){
                    console.log(http.responseText)
                }
            }
            
        }
    }

    useEffect(() => {

        console.log(youtubeFetch())

    
    })

return(
<h1>Music</h1>
)
}


export default Music;
