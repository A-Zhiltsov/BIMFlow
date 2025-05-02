import React from 'react';
import './About.css'; // Создайте этот файл для стилей
import { Link } from 'react-router-dom';
import founder from '../../assets/img/my_foto.jpg';

const AboutPage = () => {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="about-container">
                    <h1>О проекте BIMFlow</h1>
                    <p className="hero-subtitle">
                        BIMFlow — это некоммерческий образовательный проект, созданный для развития BIM-проектирования и самоподготовки квалифицированных специалистов в области информационного моделирования зданий.
                    </p>
                </div>
            </section>

            <section className="about-mission">
                <div className="about-container">
                    <h2>Наша миссия</h2>
                    <div className="mission-grid">
                        <div className="mission-card">
                            <div className="mission-icon">💻</div>
                            <h3>Обучение</h3>
                            <p>
                                Помогаем освоить функционал BIM инструментов и разобраться с основами программирования плагинов.
                            </p>
                        </div>
                        <div className="mission-card">
                            <div className="mission-icon">⚙️</div>
                            <h3>Автоматизация</h3>
                            <p>
                                Разрабатываем решения для автоматизации рутинных задач в проектировании. Стремимся повышать производительность и качество труда инженеров.
                            </p>
                        </div>
                        <div className="mission-card">
                            <div className="mission-icon">🌐</div>
                            <h3>Open-source</h3>
                            <p>
                                Мы создаем и открыто распространяем готовые решения для автоматизации проектирования. Наши разработки доступны каждому инженеру и могут свободно модифицироваться под конкретные задачи.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-team">
                <div className="about-container">
                    <h2>Команда</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-photo">
                                <img src={founder}></img>
                            </div>
                            <h3>Александр Жильцов</h3>
                            <p className="member-role">Основатель, BIM-разработчик</p>
                            <p>Главный идеолог и создатель сайта</p>
                        </div>
                        <div className="team-member">
                            <div className="member-photo"></div>
                            <h3>Мария Иванова</h3>
                            <p className="member-role">Главный последователь</p>
                            <p>Жаждущий знаний Tekla-активист</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-cta">
                <div className="about-container">
                    <h2>Присоединяйтесь к нашему сообществу</h2>
                    <p>
                        Начните изучать программирование для BIM или поделитесь своими знаниями с другими
                    </p>
                    <div className="cta-buttons">
                        <Link to="/courses" className="cta-button primary">
                            Начать обучение
                        </Link>
                        <Link to="/contacts" className="cta-button secondary">
                            Связаться с нами
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;