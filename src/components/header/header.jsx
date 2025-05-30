import {useAtom} from "jotai";
import {InputSearch} from "../ui/Input/Input.jsx";
import {searchAtoms} from "../../store/searchAtoms.js";


export const Header = () => {
    const [search, setSearch] = useAtom(searchAtoms);
    return (
        <header>
            <section className="header__leftside">
                <img src="#" alt="#" className="logotype"/>

                <div className="search-container">
                    <img src="#" alt="#" className="search-icon"/>
                    <InputSearch onChange={(e) => setSearch(e.target.value)}/>
                </div>
            </section>
        </header>
    )
}