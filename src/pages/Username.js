import React, { useContext } from 'react';
import { UserContext } from '../components/UserContext';

export const Username = () => {
  const { user } = useContext(UserContext);
  console.log(user)

  return (
    <div className="username">
      <p>{user?.lastname} Hello</p>
    </div>
  );
};
