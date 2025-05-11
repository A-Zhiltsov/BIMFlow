import { Link } from "react-router-dom";
import Chapter1 from "./Tekla-components/Сhapter1";
import Chapter2 from "./Tekla-components/Сhapter2";

// src/data/courses.js
export const coursesData = [
  {
    id: 'tekla-components',
    title: "Создание пользовательских компонентов в Tekla Structures",
    description: "Полный курс по созданию, параметризации и автоматизации пользовательских компонентов. Вы узнаете об основных типах компонентов, способе их создания и как связать компонент с таблицами Excel для связи с базой данной или проведения сложных расчетов.",
    LinkURL: "/courses/tekla-components",
    sections: [
      {
        id: 1,
        title: "Введение",
        content: Chapter1,
      },
      {
        id: 1,
        title: "Lorem",
        content: Chapter2,
      },
      // ... другие разделы
    ]
  },
  {
    id: 'bim-modeling',
    title: "Основы программирования для Tekla Structures",
    description: "Вводный курс по автоматизации с использованием Tekla Open API, включая работу с .NET и создание собственных плагинов.",
    LinkURL: "/courses/bim-modeling",
    sections: [
      {
        id: 1,
        title: "Что такое BIM?",
        content: "<h3>Основные понятия</h3><p>BIM (Building Information Modeling)...</p>"
      },
      // ... другие разделы
    ]
  }
];
