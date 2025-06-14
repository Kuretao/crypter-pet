import styles from './style.module.scss';
import arrow from './../../../assets/images/arrow__big.svg'
import sphere from './../../../assets/icons/sphere.svg'
import slide1 from './../../../assets/images/img.png'
import {Button} from "../../ui/Button/Button.jsx";
import 'swiper/css'
import {Swiper} from "swiper/react";
import {SwiperSlide} from "swiper/react";
import SwiperCore from 'swiper';
import { Mousewheel } from 'swiper/modules';
SwiperCore.use([Mousewheel]);

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
    const info = [
        {
            title: 'Collection',
            content: 'Escape II'
        },
        {
            title: 'Collection',
            content: 'Escape II'
        },
        {
            title: 'Collection',
            content: 'Escape II'
        },
    ]
    return (
        <div className={styles.main}>
            <Swiper
                    direction="vertical"
                    mousewheel={true}
                    modules={[Mousewheel]}
                    className={styles["main-slider"]}
                >
                    <SwiperSlide>
                        <img src={slide1} alt="main-img"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide1} alt="main-img"/>
                    </SwiperSlide>
            </Swiper>
            <div className={styles["main-content"]}>
                <ul className={styles["main-content-info"]}>
                    {info.map((item, index) => (
                        <li key={index}>
                            <span>{item.title}</span>
                            <span><img src={sphere} alt="sphere"/> {item.content}</span>
                        </li>
                    ))}
                </ul>

                <div>
                    <h2>The creator <br/> network.</h2>

                    <div className={styles.btns}>
                        <Button text={'view nft'} additionalClass={'transparent'}/>
                        <Button text={'place a bid'} additionalClass={'dark'}/>
                    </div>
                </div>
            </div>
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