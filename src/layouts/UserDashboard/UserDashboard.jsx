import React from 'react';
import DashNavigator from './DashNavigator';
import { Outlet } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className='h-screen flex gap-5'>
      <DashNavigator />
      <div className='w-full m-4 p-10 border-gray-300 border-2 rounded-xl bg-base-200'>
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;