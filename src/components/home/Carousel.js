import './Carousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imgCarousel1 from '../../static/frete.png';
import imgCarousel2 from '../../static/site.png';



function Carrousel(props){
    return(
        <section className='carrosel'>
            <Carousel
                className='carousel'
                showStatus={false}
                showArrows={false}
                showIndicators={false} 
                useKeyboardArrows={true} 
                showThumbs={false} 
                width={"100vh"} 
                autoPlay={true} 
                autoFocus={true} 
                infiniteLoop={true}
            >

                <div>
                    <img alt='' src={imgCarousel1} />
                </div>
                <div>
                    <img alt='' src={imgCarousel2} />
                </div>
            </Carousel>
        </section>
    )
}

export default Carrousel;