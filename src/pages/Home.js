import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Main from '../components/Main';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/dataSlice/dataSlice';
import ItemDetail from '../components/ItemDetail';

const Home = () => {
  const dispatch = useDispatch();
  const { data, category, loading, error } = useSelector(state => state.data);
  

  useEffect(() => {
    dispatch(fetchData(category));
  }, [category]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main item={data} />} />
        <Route path='/detail/:term' element={<ItemDetail item={data} />} />
      </Routes>
    </div>
  );
};

export default Home;
