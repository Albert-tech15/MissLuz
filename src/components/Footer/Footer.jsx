import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Aprendiendo con Miss Luz. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
