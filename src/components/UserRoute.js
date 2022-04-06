import React from 'react';
import { Route,Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoadingToRedirect } from './LoadingToRedirect';

export const UserRoute = ({children, ...rest}) => {
	const {currentUser} = useSelector((state) => state.user);
  return currentUser ? <Outlet {...rest} /> : <Navigate to="/login" />
}
