import React,{ useState } from 'react'
import {SliderData} from './slider'
import '../../resources/css/carousel.css'

const Carousel = () => {
    const [current,setCurrent] = useState(0)
    const slideLength = SliderData.length;

    const nextSlide= () => {
        setCurrent(current === slideLength-1 ? 0 : current+1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? slideLength-1 : current-1)
    }
    if(!Array.isArray(SliderData) || slideLength <= 0) {
        return null;
    }
    return (
        <div className="container mobileOnly">
            <section className="slider displayFlex">
                <i className="fas fa-arrow-circle-left left-arrow" onClick={prevSlide}></i>
                <i className="fas fa-arrow-circle-right right-arrow" onClick={nextSlide}></i>
                {
                    SliderData.map((slide,index) => {
                        return (
                            <span className={index === current ? 'slide active' : 'slide' } key={index}>
                                {index === current && (<img src={slide.image} alt="Banner Image" className="sliderImg"/>)}
                            </span>
                        )
                    })
                }
            </section>
        </div>
    )    
}

export default Carousel