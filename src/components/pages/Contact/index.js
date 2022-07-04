import { Styles } from './styles';

import pageInBiuld from '../../../img/pageinbiuld.png'

import BoxDialog from '../../layout/BoxDialog/index'

function Contact(){
    return(
        <Styles>
         {/*} <div className='title_container'>
                <h1>Em Breve</h1>
                <p>Estamos preparando mais uma ferramenta incrível para você!</p>
                <img src={pageInBiuld} alt='pageInBild'/>
            </div> */}
            <BoxDialog/>
        </Styles>
        
    )
}

export default Contact