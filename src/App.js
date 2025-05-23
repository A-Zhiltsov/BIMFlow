import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import HomePage from './pages/HomePage/HomePage';
import Courses from './pages/Courses/Courses';
import CoursePage from './pages/CoursePage/CoursePage';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Подключаем Header */}
        <Header />

        {/* Основное содержимое */}
        <main className="main-content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CoursePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
