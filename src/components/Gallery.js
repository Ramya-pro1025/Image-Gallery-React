import React from 'react';
// Import images from the correct path
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.jpg';
import image7 from '../assets/images/image7.jpg';
import image8 from '../assets/images/image8.jpg';

function Gallery() {
  return (
    <div className="outer-container">
      <div className="flex-container">
        <h1 className="flex-container__title">"Framing the World"</h1>
        <div className="gallery">
          <div className="card">
            <img className="card__image" src={image1} alt="giraffe" width="200" height="200" />
          </div>
          <div className="card">
            <img className="card__image" src={image2} alt="cheetah" width="200" height="200" />
          </div>
          <div className="card">
            <img className="card__image" src={image3} alt="eagle" width="200" height="200" />
          </div>
          <div className="card">
            <img className="card__image" src={image4} alt="bear" width="300" height="200" />
          </div>
          <div className="card">
            <img className="card__image" src={image5} alt="wolf" width="200" height="200" />
          </div>
          <div className="card">
            <img className="card__image" src={image6} alt="lion" width="200" height="200" />
          </div>
          <div className="card">
            <img className="card__image" src={image7} alt="polar bear" width="200" height="200" />
          </div>
          <div className="card">
            <img className="card__image" src={image8} alt="deer" width="200" height="200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
