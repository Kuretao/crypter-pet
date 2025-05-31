import styles from './style.module.scss';
import arrow from './../../../assets/images/arrow__big.svg'
import sphere from './../../../assets/icons/sphere.svg'

const HomeWelcomeHeader = () =>{
    return (
        <header className={styles.header}>
            <div>
                <h1>Curated <br/> Artwork.</h1>
                <img src={arrow} alt=""/>
            </div>

            <div>
                <p>
                    We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities.
                </p>

                <a href="#">start your search <img src={sphere} alt=""/></a>
            </div>
        </header>
    )
}

const HomeWelcomeMain = () =>{
    return (
        <div>

        </div>
    )
}



export const HomeWelcome = () =>{
    return (
        <section className={styles["welcome-section"]}>
            <HomeWelcomeHeader/>
            <HomeWelcomeMain/>
        </section>
    )
}