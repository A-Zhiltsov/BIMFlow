import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';
import CourseCard from '../../components/CourseCard/CourseCard.js';

const CoursesPage = () => {
    const [activeTab, setActiveTab] = useState('Tekla');

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
        <div className="courses-page">
            {/* Герой-секция */}
            <section className="courses-hero">
                <div className="courses-container">
                    <h1 className="courses-title">Наши курсы</h1>
                    <p className="courses-subtitle">
                        Выберите курс для углубленного изучения интересующей вас программы
                    </p>
                </div>
            </section>

            {/* Вкладки и контент */}
            <section className="courses-main">
                <div className="courses-container">
                    <div className="courses-tabs">
                        <button
                            className={`courses-tab ${activeTab === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveTab('Tekla')}
                        >
                            Tekla Structures
                        </button>
                        <button
                            className={`courses-tab ${activeTab === 'my' ? 'active' : ''}`}
                            onClick={() => setActiveTab('Revit')}
                        >
                            Revit
                        </button>
                    </div>

                    <div className="courses-content">
                        {activeTab === 'Tekla' ? (
                            <div className="all-courses">
                                <h2 className="courses-section-title">Tekla Structures</h2>

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
                        ) : (
                            <div className="my-courses">
                                <h2 className="courses-section-title">Revit</h2>


                                <p className="no-courses">
                                    Пока нет активных курсов.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoursesPage;