import './main.css'
import Carrousel from './Carousel';
import Galeria from './Galeria';
import Produtos from './Produtos.js'
import Comentarios from './Comentarios.js'

function Main(){
    return(
        <main>            
            <Carrousel/>
            <Galeria/>
            <Produtos/>
            <Comentarios/>
        </main>
    )
}

export default Main;
