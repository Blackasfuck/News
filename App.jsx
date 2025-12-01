import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './src/components/Home';
import Categories from './src/components/Categories';
import Detail from './src/components/Detail';
import AddNews from './src/components/AddNews';
import CategoryPage from './src/components/CategoryPage';
import Grid from './src/components/Grid';

function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'sans-serif' }}>
        <header style={{ padding: 12, background: '#353535', color: '#fff' }}>
          <nav style={{ display: 'flex', gap: 12 }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Главная</Link>
            <Link to="/categories" style={{ color: '#fff', textDecoration: 'none' }}>Категории</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grid" element={<Grid />} />
            <Route path="/add" element={<AddNews />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
