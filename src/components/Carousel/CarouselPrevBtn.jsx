import React from 'react';
export default function CarouselPrevBtn(props) {
    const {goToSlide, index} = props;
    return(
        <div className="carousel__btn, carousel_btn-arrow" onClick={()=>goToSlide(index, true, false)}>&#10094;</div>
    );
}