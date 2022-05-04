import styles from './Home.module.css'

import savings from '../../img/savings.svg'

import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>PayLog</span>
            </h1>
            <p>Comece os registros de pagamentos agora!</p>
            <LinkButton to="/newrequest" text="Criar Registro" />
            <img src={savings} alt="PayLog" />
        </section>
    )
}

export default Home