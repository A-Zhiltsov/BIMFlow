import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { coursesData } from '../../data/courses';
import './CoursePage.css';

const CoursePage = () => {
  const { courseId } = useParams();
  const [activeSection, setActiveSection] = useState(0);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundCourse = coursesData.find(c => c.id === courseId);
    setCourse(foundCourse);
    setLoading(false);
  }, [courseId]);

  if (loading) return (
    <div className="course-page">
      <div className="container">
        <div className="loading">
          <div>Загрузка курса...</div>
          <div className="loading-spinner"></div>
        </div>
      </div>
    </div>
  );
  
  if (!course) return (
    <div className="course-page">
      <div className="container">
        <div className="error">
          <div>Курс не найден</div>
          <Link to="/courses" className="back-link">
            Вернуться к списку курсов
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="course-page">
      <section className="course-header">
        <div className="container">
          <h1>{course.title}</h1>
          <p className="course-description">{course.description}</p>
        </div>
      </section>

      <div className="course-content-container">
        <div className="container">
          <div className="course-layout">
            <aside className="course-sidebar">
              <nav className="course-toc">
                <h3>Содержание курса</h3>
                <ul>
                  {course.sections.map((section, index) => (
                    <li key={section.id}>
                      <button
                        className={`toc-item ${activeSection === index ? 'active' : ''}`}
                        onClick={() => setActiveSection(index)}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <main className="course-main-content">
              <div dangerouslySetInnerHTML={{ __html: course.sections[activeSection].content }} />
              
              <div className="course-navigation">
                {activeSection > 0 && (
                  <button onClick={() => setActiveSection(activeSection - 1)}>
                    ← Назад
                  </button>
                )}
                
                {activeSection < course.sections.length - 1 && (
                  <button onClick={() => setActiveSection(activeSection + 1)}>
                    Далее →
                  </button>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;