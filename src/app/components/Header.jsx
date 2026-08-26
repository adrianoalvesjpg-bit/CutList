import React from "react";
import { useEffect, useState } from "react";

import HeaderSt from '../style/Header.module.css'
import UserSt from '../style/User.module.css'

function Header({screen, screenSelect}){
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        function handleScroll() {
        setScrollY(window.scrollY);
        }

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    const headerStyle = scrollY > 10 ? HeaderSt.header2 : HeaderSt.header


    return(
        <header className={headerStyle}>
            <ul className={HeaderSt["menu-bar"]}>
                <li><a onClick={() => screenSelect(0)} className={`${HeaderSt["menu-item"]} ${screen === 0 ? HeaderSt.active : ""}`}>Produtos</a></li>
                <li><a onClick={() => screenSelect(1)} className={`${HeaderSt["menu-item"]} ${screen === 1 ? HeaderSt.active : ""}`}>Matéria Prima</a></li>
            </ul>
            <div className={HeaderSt["right-group"]}>
                <ul className={HeaderSt["menu-bar"]}>
                    <li><a onClick={() => screenSelect(2)} className={`${HeaderSt.devMode} ${screen === 2 ? HeaderSt.activeDev : ""}`}>DevMode</a></li>
                </ul>
                <button id={UserSt["button-perfil"]}></button>
            </div>
        </header>
    )
}

export default Header;