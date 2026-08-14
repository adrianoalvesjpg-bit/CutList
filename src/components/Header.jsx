import React from "react";

import HeaderSt from '../style/Header.module.css'
import UserSt from '../style/User.module.css'

function Header({screenSelect}){


    return(
        <header className={HeaderSt['header']}>
            <ul className={HeaderSt["menu-bar"]}>
                <li><a onClick={() => screenSelect(0)} className={HeaderSt["menu-item"]}>Produtos</a></li>
                <li><a onClick={() => screenSelect(1)} className={HeaderSt["menu-item"]}>Matéria Prima</a></li>
            </ul>
            <button id={UserSt["button-perfil"]}></button>

        </header>
    )
}

export default Header;