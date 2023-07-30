import './Comentarios.css'
import comentImg from '../../static/icons8-vestido-96.png' 
import Coment from './coment.js'

function Comentarios(){
    return(
        <div className='comentarios'>
            <Coment img={comentImg} nome='Rayssa' coment='Muito boa a roupa'/>
            <Coment img={comentImg} nome='Paula' coment='Chave'/>

        </div>
    )
}

export default Comentarios;