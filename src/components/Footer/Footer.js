import React from 'react';
import './Footer.css'; // Создайте этот файл для стилей

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Социальные сети и копирайт */}
                <div className="footer-bottom">
                    <div className="social-links">
                        <a href="#" className="social-link">
                            {/* VK Icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.354 15.696h-.956v-4.22c0-.786-.014-1.799-1.228-1.799-1.23 0-1.418.96-1.418 1.742v4.277H8.8V9.85h1.713v1.043h.024c.318-.602 1.092-1.238 2.25-1.238 2.407 0 2.85 1.584 2.85 3.644v4.397zM9.66 8.386c-.61 0-1.102-.492-1.102-1.1 0-.61.492-1.102 1.102-1.102.61 0 1.102.492 1.102 1.101 0 .61-.492 1.102-1.102 1.102z" fill="currentColor" />
                            </svg>
                        </a>
                        <a href="#" className="social-link">
                            {/* Telegram Icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.8 8.5c-.1.4-.4.5-.8.3l-2.6-2-1.3 1.3c-.1.1-.3.2-.5.2h-.1l.4-2.6 5.1-4.7c.2-.2 0-.3-.3-.1l-6.4 4.1-2.6-.8c-.4-.1-.4-.7.1-.9l10.2-4c.3-.1.7 0 .6.6z" fill="currentColor" />
                            </svg>
                        </a>
                        <a href="#" className="social-link">
                            {/* YouTube Icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 12.8c-.1.4-.4.7-.8.7-1.2.1-2.4.2-3.6.2-1.2 0-2.4-.1-3.6-.2-.4 0-.7-.3-.8-.7-.1-1.3-.2-2.6-.2-3.9 0-1.3.1-2.6.2-3.9 0-.4.4-.7.8-.7 1.2-.1 2.4-.2 3.6-.2 1.2 0 2.4.1 3.6.2.4 0 .7.3.8.7.1 1.3.2 2.6.2 3.9 0 1.3-.1 2.6-.2 3.9zm-2.3-3.9l-2.5-1.4v2.8l2.5-1.4z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>
                    <div className="copyright">
                        © {new Date().getFullYear()} BIMFlow. Все права защищены.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;