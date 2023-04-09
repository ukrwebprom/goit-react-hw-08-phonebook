import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/operations';
import { Dummy } from './Dummy/Dummy';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';
import { Layout } from './Layout/Layout';
import { PrivateRoute, PublicRoute } from './PrivatePublicRoute';

import './App.scss';

export function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dummy />} />
        <Route element={<PrivateRoute />}>
          <Route path='contacts' element= {<Contacts />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Route>
        <Route path="*" element={<Dummy />} />
      </Route>
    </Routes>
  );
}
