import './Galeria.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imgCarousel from '../../static/icons8-vestido-96.png';


function Galeria(){
    return(
        <section className='galeria'>
            <div className='galeria-titulo'>
                Galeria
            </div>
            <div className='galeria-conteudo'>
                <div className='redes'>
                    Acompanhe as Novidades nas nossa Redes.
                </div>
                <div className='carrosel'>
                    <Carousel
                    className='carousel'
                    showStatus={false}
                    showArrows={false}
                    showIndicators={false} 
                    useKeyboardArrows={true} 
                    showThumbs={false} 
                    width={"80%"} 
                    autoPlay={true} 
                    autoFocus={true} 
                    infiniteLoop={true}
                    >
                        <div>
                            <img alt='' width='70%' src={imgCarousel}/>
                            <p>Salve</p>
                        </div>
                        <div>
                            <img alt='' width='70%' src={imgCarousel}/>
                            <p>isso q é foda</p>
                        </div>
                    </Carousel>
                </div>

            </div>

        </section>
    );
}

export default Galeria;