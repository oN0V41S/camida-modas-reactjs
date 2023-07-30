import './Comentarios.css'

function Coment(props){
    return(
     <div className='coment'> 
        <img alt='' src={props.img}/>
        <div> {props.nome} <br/> {props.coment} </div>
    </div>
    )
}

export default Coment;