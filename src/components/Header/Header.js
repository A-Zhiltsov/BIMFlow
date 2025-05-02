import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // или next/link для Next.js
import './Header.css'; // Стили (см. ниже)
import logo from '../../assets/img/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Пример разделов (можно заменить на свои)
  const menuItems = [
    { title: 'Главная', path: '/' },
    { title: 'Курсы', path: '/courses' },
    { title: 'О проекте', path: '/about' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Логотип */}
        <Link to="/" className="logo">
            <img src={logo} className="logo-img"></img>
            <span className="logo-text">
            BIMFlow</span>
        </Link>

        {/* Основное меню (десктоп) */}
        <nav className="desktop-menu">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Мобильное меню (бургер) */}
        <div className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>
      </div>

      {/* Мобильное меню (раскрывается по клику) */}
      {isMenuOpen && (
        <nav className="mobile-menu">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.path} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;