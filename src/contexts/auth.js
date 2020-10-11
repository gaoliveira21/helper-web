/* eslint-disable react/forbid-prop-types */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('@helper:user'))
  );
  const [token, setToken] = useState(localStorage.getItem('@helper:token'));

  useEffect(() => {
    const storagedToken = localStorage.getItem('@helper:token');
    if (storagedToken)
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
  }, []);

  async function signIn({ email, password }) {
    console.log(email, password);
  }

  async function signUp({ name, email, password }) {}

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
        signUp,
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
