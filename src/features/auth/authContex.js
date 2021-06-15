import { createContext, useEffect, useState } from 'react';
import { supaClient } from '../core/supa';

const initialValues = { user: null, session: null };
export const userContext = createContext(initialValues);

export const UserAuth = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const currentUser = supaClient.auth.user();
    const currentSession = supaClient.auth.session();
    setSession(currentSession);
    setUser(currentUser);

    const { data: authListener } = supaClient.auth.onAuthStateChange(
      (_event, updatedSession) => {
        setSession(updatedSession);
        setUser(updatedSession?.user ?? null);
      },
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return (
    <userContext.Provider value={{ user, session }}>
      {children}
    </userContext.Provider>
  );
};
