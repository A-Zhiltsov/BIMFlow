import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import CourseCard from '../../components/CourseCard/CourseCard';

const HomePage = () => {

    const TeklaCourses = [
        {
            id: 1,
            title: "Создание пользовательских компонентов",
            description: "Полный курс по созданию, параметризации и автоматизации пользовательских компонентов. Вы узнаете об основных типах компонентов, способе их создания и как связать компонент с таблицами Excel для связи с базой данной или проведения сложных расчетов.",
            linkUrl: "/courses/custom-components",
        },
        {
            id: 2,
            title: "Основы программирования для Tekla Structures",
            description: "Вводный курс по автоматизации с использованием Tekla Open API, включая работу с .NET и создание собственных плагинов.",
            linkUrl: "/courses/tekla-programming",
        },
    ];

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
                    <div className="course-grid">
                        {TeklaCourses.map(course => (
                            <CourseCard
                                key={course.id}
                                title={course.title}
                                description={course.description}
                                linkUrl={course.linkUrl}
                                linkText={course.linkText}
                            />
                        ))}
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