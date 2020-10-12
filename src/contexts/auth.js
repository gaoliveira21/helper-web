/* eslint-disable react/forbid-prop-types */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('@helper:user'))
  );

  useEffect(() => {
    const storagedToken = localStorage.getItem('@helper:token');
    if (storagedToken)
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
  }, []);

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/entities/auth', { email, password });

      const { token: access_token, entity } = response.data;

      api.defaults.headers.Authorization = `Bearer ${access_token}`;

      localStorage.setItem('@helper:token', access_token);
      localStorage.setItem('@helper:user', JSON.stringify(entity));

      setUser(entity);
    } catch (error) {
      toast.error('Falha na autenticação');
    }
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.array.isRequired,
};

export default AuthContext;
