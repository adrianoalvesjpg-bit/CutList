import React from "react";

function Header({screenSelect}){


    return(
        <header className='header'>
            <ul className="menu-bar">
                <li><a onClick={() => screenSelect(0)} className="menu-item">Produtos</a></li>
                <li><a onClick={() => screenSelect(1)} className="menu-item">Matéria Prima</a></li>
            </ul>
            <button id="button-perfil"></button>

        </header>
    )
}

export default Header;