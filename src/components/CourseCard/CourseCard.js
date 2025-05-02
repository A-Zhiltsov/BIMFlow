import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/Courses/Courses.css';

const CourseCard = ({ title, description, linkUrl, linkText }) => {
  return (
    <div className="course-card">
      <h3 className="course-title">{title}</h3>
      <p className="course-description">{description}</p>
      <Link to={linkUrl} className="course-button">
        {linkText || 'Подробнее о курсе'}
      </Link>
    </div>
  );
};

// Пропсы по умолчанию
CourseCard.defaultProps = {
  linkText: 'Подробнее о курсе'
};


export default CourseCard;