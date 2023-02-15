import React , {Component} from 'react';
import CarouselDot from './CarouselDot.jsx';
import CarouselNextBtn from "./CarouselNextBtn.jsx";
import CarouselPrevBtn from "./CarouselPrevBtn.jsx";
import "../../styles/style.scss";
import "../../styles/carousel.scss"

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {currentSlideIndex: 0, forward: true, backward: false};
    }
    componentDidMount () {
        const that = this;
        this.slideshowHandle = this.props.config.autoplay && setInterval(function(){that.goToSlide(that.state.currentSlideIndex, false, true);}, this.props.config.idleTime);
        console.log("Slideshow components loaded successfully" + that);
    }
    goToSlide = (index, prev = false, next = false) => {
        const that = this;
        const totalSamples = this.props.config.data.length;
        const {infinite, tofro, idleTime,autoplay} = this.props.config;
        if(infinite){
            if(next){
                index = (index + 1 ) % totalSamples;
            } else if(prev){
                index = index === 0 ?
                totalSamples-1: (index-1)%
                totalSamples;
            }
        } else {
            if(next){
                if(index !== totalSamples-1) {
                    index = (index + 1 ) % totalSamples;
                } else if(tofro && autoplay) {
                    clearInterval(this.slideshowHandle);
                    this.slideshowHandle2 = setInterval(function(){that.goToSlide(that.state.currentSlideIndex, true, false); }, idleTime);
                }
            } else if(prev) {
                if(index > 0)
                {
                    index = (index -1 ) % totalSamples;
                } else if(tofro && autoplay) {
                    clearInterval(this.slideshowHandle);
                    clearInterval(this.slideshowHandle2);
                    this.slideshowHandle2 = setInterval(function(){that.goToSlide(that.state.currentSlideIndex, false, true); }, idleTime);
                }
            }
        }
        
        this.setState({currentSlideIndex:index});
    }
    getSlideDots() {
        const dotsArray =[];
        for(let i =0;i <this.props.config.data.length; i++){
            dotsArray.push(<CarouselDot key={i} index={i} currentSlideIndex={this.state.currentSlideIndex} goToSlide={this.goToSlide}/>);
        }
        return dotsArray;
    }
    render() {
        const {data, infinite, showCaption, showSlideNum, showDots, showArrows} = this.props.config;
        return(<div>
        <div className="my-samples">
            { showSlideNum && <div className='h3'>{this.state.currentSlideIndex+1} / {data.length}</div>}
           
        <img className='mask-img, img' src = {data[this.state.currentSlideIndex].src} alt="Snow"/>
        
       
        {
            (showArrows === 'both' || showArrows === 'prev') && (infinite || this.state.currentSlideIndex > 0) && <CarouselPrevBtn goToSlide={this.goToSlide} index ={this.state.currentSlideIndex}/>
        }
        {
            (showArrows === 'both' || showArrows === 'next') && (infinite || this.state.currentSlideIndex !== data.length-1) && <CarouselNextBtn goToSlide={this.goToSlide} index={this.state.currentSlideIndex}/>
        }
        {
            showCaption && <div className="centered">{data[this.state.currentSlideIndex].caption}</div>
        }
        <div className="dots-wrapper">
        {
          showDots && this.getSlideDots()
        }
        </div>
        </div>

<div className="clearfix"></div>
      </div>)
    }
}


    
