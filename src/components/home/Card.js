import './card.css'
import cardCard from '../../static/icons8-carrinho-96.png'

function Card(props){
    return(
        <div>
            <a className='card' href='.galeria'>
                <img className='card-img' alt='' src={props.src}/>
                <div className='card-info'>Blusa</div>
                <div className='card-desc'>Tamanhos G, GG</div>
                <div className='card-buy'> 
                    <div className='card-price'>R${props.price}</div>
                    <div className='card-shop'> <img alt='' src={cardCard}/> </div>
                </div>

            </a>
        </div>
    )
}

export default Card;