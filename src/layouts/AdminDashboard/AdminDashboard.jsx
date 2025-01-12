import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminNavigator from './AdminNavigator';

const AdminDashboard = () => {
  const location = useLocation();
  // console.log(location);
  
  return (
    <div className='h-screen flex gap-5'>
      <AdminNavigator />
      <div className='w-full m-4 p-10 border-gray-300 border-2 rounded-xl bg-base-200'>
        <Outlet />
        {/* <h3>this is default outlet</h3> */}
      </div>
    </div>
  );
};

export default AdminDashboard;