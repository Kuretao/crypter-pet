import styles from './style.module.scss';
import sphere from './../../../assets/icons/sphere.svg'

const HomeArtistContent = () =>{
    return (
        <div className={styles[".artists-content"]}>
            <div>
                <h2>Hot NFT artists of the month.</h2>
                <img src={sphere} alt="" className="arrow"/>
            </div>

            <p>We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. Join the millions of creators, collectors, and curators who are on this journey with you.</p>
        </div>
    )
}

const cards = [
    {
      username: '@randomdash',
      price: 12.39,
      img: sphere,
    },
    {
        username: '@randomdash',
        price: 12.49,
        img: sphere,
    },
    {
        username: '@randomdash',
        price: 12.69,
        img: sphere,
    },
]

const HomeArtistCards = () => {
    return (
        <div className={styles[".artists-cards"]}>
            {cards.map((card, index) => (
                <article key={index} className={styles[".artists-card"]}>
                    <div className={styles.number}>{index + 1}</div>
                    <div className={styles[".card-main"]}>
                        <img src={card.img} alt={index + 1}/>
                        <div>
                            <h6>{card.username}</h6>
                            <span>Total sale: <b>{card.price}</b></span>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    )
}

export const HomeArtist = () =>{
    return (
        <section className={styles.artists}>
            <HomeArtistContent/>
            <HomeArtistCards />
        </section>
    )
}