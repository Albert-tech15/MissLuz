import React, {useEffect, useState} from "react";
import './body.css';
import VideoBox from "../VideoBox/VideoBox.jsx";
import ImageCarousel from "../ImageCarousel/ImageCarousel.jsx"; 

const Body = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/images')
        .then(response => response.json())
        .then(data => setImages(data))
        .catch(error => console.error("Error fetching images:",error));
    }, []);

    return (
        <div className="body-container">
            
            <div className="content">
                <VideoBox />
                <div className="box box-pink">
                    <h2>Materiales didácticos</h2>
                    <p>Links de documentos de Word y PDF</p>
                </div>
                <div className="box box-green">
                    <h2>Información y ejemplos adicionales</h2>
                    <p>Ofrece ejemplos específicos que te ayuden a respaldar tus ideas principales.</p>
                </div>
                <div className="box box-blue">
                    <h2>Aprendamos datos curiosos</h2>
                    <p>¡Aprender información nueva también puede ser divertido! Inserta trivias/datos curiosos.</p>
                </div>
                <div className="box image-gallery">
                    <ImageCarousel images={images}/> 
                </div>
                <div className="box box-purple">
                    <h2>Referencias</h2>
                    <p>Cita tus fuentes en caso de haberlas.</p>
                </div>
            </div>
        </div>
    );
}

export default Body;
