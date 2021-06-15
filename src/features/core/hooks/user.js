import { useContext } from 'react';
import { userContext } from '../../auth';

export const useAuth = () => {
  const context = useContext(userContext);
  if (context === undefined) {
    throw new Error('useAuth must be use in AuthContext');
  }
  return context;
};
