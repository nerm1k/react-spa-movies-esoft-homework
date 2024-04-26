import React from 'react';
import { Routes, Route } from "react-router-dom";
import FilmsPage from './components/FilmsPage/FilmsPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import SearchPage from './components/SearchPage/SearchPage';
import Layout from './components/Layout/Layout';
import FilmPage from './components/FilmPage/FilmPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<FilmsPage />} />
          <Route path='/films/:href' element={<FilmPage/>} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
