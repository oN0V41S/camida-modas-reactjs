import './footer.css'
// import img1 from '../../static/icons8-instagram-96.png'
// import img2 from '../../static/icons8-whatsapp-96.png'
import acess from '../../static/icons8-divisa-circulada-acima-100.png'

function Footer(){
    return(
        <footer className='footer'>
            <div className='footer-sec'>
                <div className='sec-left'>
                    <div className='footer-pay'>
                        <div className='footer-title'>Formas de pagamento</div>
                         Cartão de Crédito <br/> <br/>
                         Pix <br/> <br/>
                         Cartão de Débito
                    </div>
                    <div className='footer-inst'>
                        <div class="footer-title">Institucional</div>
                        <a href='.header'>Sobre a loja</a>
                        <a href='.galeria'>Galeria</a>
                        <a href='.header'>Catálogo</a>
                    </div>
                </div>
                <div className='sec-right'>
                    <div className='footer-redes'> 
                        <div className='footer-title'> Nossas Redes Sociais</div>
                        <a href='.header'> <img className='footer-img' alt=''/> Instagram</a>
                        <a href='.header'> <img className='footer-img' alt=''/> Whatsapp</a>
                    </div>
                </div>
            </div>
            <div className='footer-btn'>
                <a href='.header'> <img alt='' src={acess}/> </a>
            </div>
            <div className='footer-autoral'>
             © 2023 Camila modas. Todos os direitos reservados.
            </div>
        </footer>
    )
}

export default Footer;