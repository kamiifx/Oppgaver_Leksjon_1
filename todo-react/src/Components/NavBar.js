import React from "react";
import style from "../scss/NavBar.module.scss"
import styled from 'styled-components'

function NavBar(props){

    const H2 = styled.h2`
        font-family: Roboto,sans-serif;
        font-size:30px;
    `;

    return(
        <header className={style.header}>
            <nav className={style.nav}>
                <ul className={style.ul}>
                    <li><H2>HIOF</H2></li>
                    <li><p>{props.name}</p></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;