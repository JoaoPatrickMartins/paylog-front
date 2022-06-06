import styles from './Home.module.css'

import dashExample from '../../img/dashExample.jpg'

//import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <section className={styles.home_container}>
            {/*<LinkButton to="/newrequest" text="Criar Registro" />*/}
            <img src={dashExample} alt="PayLog" />
        </section>
    )
}

export default Home