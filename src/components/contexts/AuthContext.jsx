import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [emailUser, setEmailUser] = useState(null);

  const authedUser = (userData) => {
    setEmailUser(userData);
  };

  return (
    <AuthContext.Provider value={{ emailUser, authedUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.node,
};
