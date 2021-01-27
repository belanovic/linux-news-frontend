import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-social">
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-instagram-square"></i>
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-youtube-square"></i>
                </div>
                <ul className="footer-links">
                    <li className="footer-item"><a href="#" className="footer-item-link">O nama</a></li>
                    <li className="footer-item"><a href="#" className="footer-item-link">Impressum</a></li>
                    <li className="footer-item"><a href="#" className="footer-item-link">Marketing</a></li>
                    <li className="footer-item"><a href="#" className="footer-item-link">Kontakt</a></li>
                </ul>
                <div className="footer-copyright">
                    Copyright <i class="fas fa-copyright"> Goran Belanovic</i>
                </div>

            </div>
        </footer>
    )
}