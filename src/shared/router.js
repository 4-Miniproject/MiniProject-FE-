import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from '../pages/DetailPage';
import DetailUpdatePage from '../pages/DetailUpdatePage';
import HomePage from '../pages/HomePage';

import Login from '../pages/Login';
import TourAll from '../pages/TourAll';



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/detail/:id' element={<DetailPage />} />
        <Route path='/update/:id' element={<DetailUpdatePage />} />

        <Route path='/posts' element={<TourAll />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
