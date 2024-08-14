import React from "react";
import './VideoBox.css';

const VideoBox = () => {
    return (
        <div className="box box-orange">
            <h2> Videos de Cuento</h2>
            <iframe width="560" 
            height="315" 
            src="https://www.youtube.com/embed/JpM2poJQ9W4?si=RndW7JcqD7Fzp8P1" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
        </div>
    );
}

export default VideoBox;