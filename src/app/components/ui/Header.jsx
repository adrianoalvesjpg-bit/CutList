import React from "react";
import { useEffect, useState } from "react";

import HeaderSt from '../../style/ui/Header.module.css'
import UserSt from '../../style/ui/User.module.css'
import { IoExitOutline } from "react-icons/io5";

function Header({
    screen,
    screenSelect,
    onAddOut,
    onAddDerivation,
    onAddTermination,
    onAddSplice,
    onAddDiodo,
    onAddResistor
    }){

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

    
    if (screen === 2) {
        return (
            <>
            <header className={HeaderSt.devMode}>
                <button onClick={() => onAddOut()}>+ Saída</button>
                <button onClick={() => onAddDerivation()}>+ Derivação</button>
                <button onClick={() => onAddTermination()}>+ Terminação</button>
                <button onClick={() => onAddSplice()}>+ Emenda</button>
                <button onClick={() => onAddDiodo()}>+ Diodo</button>
                <button onClick={() => onAddResistor()}>+ Resistor</button>
            </header>

            <IoExitOutline onClick={() => screenSelect(0)} className={HeaderSt.exitBt}/>
            
            </>
        )
    }

    return(
        <header className={headerStyle}>
            <ul className={HeaderSt["menu-bar"]}>
                <li><a onClick={() => screenSelect(0)} className={`${HeaderSt["menu-item"]} ${screen === 0 ? HeaderSt.active : ""}`}>Produtos</a></li>
                <li><a onClick={() => screenSelect(1)} className={`${HeaderSt["menu-item"]} ${screen === 1 ? HeaderSt.active : ""}`}>Matéria Prima</a></li>
            </ul>
            <div className={HeaderSt["right-group"]}>
                <ul className={HeaderSt["menu-bar"]}>
                    <li><a onClick={() => screenSelect(2)} className={`${HeaderSt.devModeBt} ${screen === 2 ? HeaderSt.activeDev : ""}`}>DevMode</a></li>
                </ul>
                <button id={UserSt["button-perfil"]}></button>
            </div>
        </header>
    )
}

export default Header;