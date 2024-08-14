import React from "react";
import Slider from "react-slick";
import './ImageCarousel.css';

const ImageCarousel = ({images}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {images.map((image) => (
                    <div key={image.id} className="carousel-slide">
                        <img src={image.url} alt={image.alt} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;