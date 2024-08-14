import React from "react";
import './Header.css';


const Header = () => {
    return (
        <section className="header">
            <h1> Aprendiendo con Miss Luz</h1>
            <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Acerca de mi</a></li>
                    <li><a href="/">Contacto</a></li>
                </ul>
            </nav>
        </section>
    )
}


export default Header;