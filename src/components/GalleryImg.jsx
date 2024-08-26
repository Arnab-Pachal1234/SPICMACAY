import React from 'react';
import './GalleryImg.css'; // Import the CSS file

function GalleryImg(props) {
    const img = require(`./images/${props.src}.jpg`);
    
    return (
        <div className="gallery-item">
            <img
                alt="gallery"
                className="gallery-img"
                src={img}
            />
        </div>
    );
}

export default GalleryImg;
