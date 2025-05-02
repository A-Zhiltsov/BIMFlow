import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';

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
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
