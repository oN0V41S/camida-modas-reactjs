import './Carousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imgCarousel from '../../static/icons8-vestido-96.png';


function Carrousel(props){
    return(
        <section className='carrosel'>
            <Carousel className='carousel' showThumbs={false} width={"100%"} autoPlay={true} autoFocus={true} infiniteLoop={true}>
                <div>
                    <img alt='' src={imgCarousel} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt='#' src={imgCarousel} />
                    <p className="legend">Legend 1</p>
                </div>
            </Carousel>
        </section>
    )
}

export default Carrousel;