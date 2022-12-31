import React from 'react';
import "../../styles/carousel.scss"
export default function CarouselNextBtn(props) {
    const {goToSlide, index} = props;
    return(
        <div className="carousel__btn, carousel_btn-arrow" onClick={()=>goToSlide(index, false, true)}>&#10095;</div>
    );
}