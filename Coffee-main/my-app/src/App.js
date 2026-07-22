import React, { useState } from 'react';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';

import './styles/theme.css';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <Navbar current={page} onNavigate={setPage} />
      <main className="app__main">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
