import './Produtos.css'
import Card from './Card.js'
import img from '../../static/icons8-vestido-96.png'

function Produtos(){
    return(
        <section className="produtos">
            <div className='produtos-titulo'>
                Veja Alguns de Nossos Produtos
            </div>

            <div className='produtos-lista'>
                <Card price='80' src={img}/>
                <Card price='129' src={img}/>
                <Card price='129' src={img}/>
            </div>

        </section>
    )
}

export default Produtos;