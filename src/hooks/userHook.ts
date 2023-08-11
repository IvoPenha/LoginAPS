import { UserContext } from '../context/userContext'
import React from 'react';

export function useUser() {
  const context = React.useContext(UserContext);

  return context;
}