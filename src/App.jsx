import React from 'react';
import {Provider} from 'react-redux';
import { Routes, Route } from "react-router-dom";
import FilmsPage from './components/FilmsPage/FilmsPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import SearchPage from './components/SearchPage/SearchPage';
import Layout from './layouts/Layout';
import FilmPage from './components/FilmPage/FilmPage';
import store from './store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/' element={<FilmsPage />} />
            <Route path='/films/:href' element={<FilmPage/>} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Provider>
    </>
  )
}

export default App;
