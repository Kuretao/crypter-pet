import {useAtom} from "jotai";
import {InputSearch} from "../ui/Input/Input.jsx";
import {searchAtoms, searchShowAtoms} from "../../store/searchAtoms.js";
import {Logo} from "../ui/Logotype/Logo.jsx";
import {IconSearch} from "../ui/Icon/Icon.jsx";
import {Button} from "../ui/Button/Button.jsx";
import {Nav} from "../ui/nav/nav.jsx";
import styles from "./header.module.scss"


export const Header = () => {
    const [search, setSearch] = useAtom(searchAtoms);
    const [show, setShow] = useAtom(searchShowAtoms);

    return (
        <header className={styles.header}>
            <section className={styles["header__leftside"]}>
                <Logo size={'small'}/>

                <div className={styles["header__search-container"]}>
                    {show && <InputSearch onChange={(e) => setSearch(e.target.value)}/>}
                    <IconSearch onClick={() => setShow(!show)}/>
                </div>
            </section>

            <section className={styles["header__rightside"]}>
                <Nav>
                    <a href="#" className={styles["header-link"]}>discover</a>
                    <a href="#" className={styles["header-link"]}>feed</a>
                    <Button text={'connect wallet'} additionalClass={'transparent'} maxWidth={"max-content"}/>
                </Nav>
            </section>
        </header>
    )
}