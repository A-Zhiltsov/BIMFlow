import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';
import CourseCard from '../../components/CourseCard/CourseCard.js';
import {coursesData} from '../../data/courses.js'

const CoursesPage = () => {
    const [activeTab, setActiveTab] = useState('Tekla');

    const TeklaCourses = [
        {
            id: coursesData[0].id,
            title: coursesData[0].title,
            description: coursesData[0].description,
            linkUrl: coursesData[0].LinkURL,
        },
        {
            id: coursesData[1].id,
            title: coursesData[1].title,
            description: coursesData[1].description,
            linkUrl: coursesData[1].LinkURL,
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