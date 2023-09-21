import { useState, createContext, useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export let AuthContext = createContext(null);

export const AuthenticationService = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/isLoggedIn').then(async (response) => {
      const data = await response.json();
      setUser(data);
      setIsLoading(false);
    });
  }, []);

  const login = async (username, password) => {
    setIsLoading(true);
    try {
      const doLogin = await fetch(`/users?username=${username}&password=${password}`);
      const response = await doLogin.json();
      if (response.length > 0) {
        const user = { username: username, user: response[0].name };
        fetch('/isLoggedIn', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user),
        });
        setUser(user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Login error:', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      fetch('/isLoggedIn', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      <Outlet />
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
