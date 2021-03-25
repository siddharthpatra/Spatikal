import React,{ useState } from 'react'
import '../../resources/css/carousel.css'
import Card from './card';




const Carousel = props => {
    const [current,setCurrent] = useState(0)
    const length = props.article.length;

    const nextSlide= () => {
        setCurrent(current === length-1 ? 0 : current+1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1)
    }
    if(!Array.isArray(props.article) || length <= 0) {
        return null;
    }
    return (
        
        <>
            
            <section className="slider displayFlex">
                <i className="fas fa-arrow-circle-left" onClick={prevSlide}></i>          
            
                { props.article.map((article,index) => 
                    {
                        return (
                            <span className={index === current ? 'slide active' : 'slide' } key={index}>
                                {index === current && (<Card key={index} data={article}/>)}
                            </span>
                        )
                    })
                }
                
                <i className="fas fa-arrow-circle-right" onClick={nextSlide}></i>  

            </section>
        </>
    )    
}

export default Carousel 