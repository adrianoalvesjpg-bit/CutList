import React from "react";
import { useEffect, useState } from "react";

import HeaderSt from '../style/Header.module.css'
import UserSt from '../style/User.module.css'

function Header({screenSelect}){
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
                <li><a onClick={() => screenSelect(0)} className={HeaderSt["menu-item"]}>Produtos</a></li>
                <li><a onClick={() => screenSelect(1)} className={HeaderSt["menu-item"]}>Matéria Prima</a></li>
            </ul>
            <button id={UserSt["button-perfil"]}></button>
        </header>
    )
}

export default Header;