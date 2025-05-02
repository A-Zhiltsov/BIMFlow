import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Создайте этот файл для стилей

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Герой-секция */}
      <section className="hero-section">
        <div className="container">
          <h1>Добро пожаловать в BIMFlow</h1>
          <p className="subtitle">
            Платформа для специалистов по Tekla Structures и BIM-проектированию
          </p>
        </div>
      </section>

      {/* О проекте */}
      <section className="about-section">
        <div className="container">
          <h2>О нашем проекте</h2>
          <div className="about-content">
            <p>
              BIMFlow создается энтузиастами на основе собственного опыта работы с <strong>Tekla Structures</strong>, 
              но мы будем рады развивать и другие направления в области информационного моделирования.
            </p>
            <p>
              Здесь мы поможем найти информацию и освоить такие темы как:
            </p>
            <ul className="features-list">
              <li>Стандартный инструментарий <strong>BIM-программ</strong></li>
              <li>Изучить основы программирования</li>
              <li>Научиться создавать собственные решения и плагины для автоматизации в <strong>Tekla Structures</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Курсы */}
      <section className="courses-section">
        <div className="container">
          <h2>Наши курсы</h2>
          <div className="course-card">
            <h3>Основы программирования для Tekla Structures</h3>
            <p>
              Полный курс по автоматизации с использованием Tekla Open API, 
              включая работу с .NET и создание собственных плагинов.
            </p>
            <Link to="/courses/tekla-programming" className="cta-button">
              Подробнее о курсе
            </Link>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="cta-section">
        <div className="container">
          <h2>Готовы начать обучение?</h2>
          <Link to="/courses" className="cta-button primary">
            Все курсы
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;