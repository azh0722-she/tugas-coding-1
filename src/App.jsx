import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/home';
import DetailPortofolio from './pages/DetailPortofolio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import Experience from './pages/Experience';
import Loading from './components/Loading'; // Import komponen loading

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading selama 2 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Jika masih loading, tampilkan screen Lottie
  if (isLoading) {
    return <Loading />;
  }

  // Jika selesai loading, tampilkan router utama
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Portofolio/:id' element={<DetailPortofolio />} />
        <Route path='/Page-Not-Found' element={<PageNotFound />} />
        <Route path='/Experience' element={<Experience />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
