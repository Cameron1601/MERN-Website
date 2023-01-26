import React from 'react';
import {Outlet, Navigate} from 'react-router-dom'

const AdminRoute = ({children, ...rest}) => {
    const auth = JSON.parse(localStorage.getItem('token'));
    if (auth){
        if (auth.token){
          return <Outlet {...rest}/>
        }
    }
  return <Navigate to="/UserDashboard"/>
  
};


export default AdminRoute;
