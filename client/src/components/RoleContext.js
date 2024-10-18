import { createContext, useContext } from 'react';

// Create RoleContext to manage roles globally
const RoleContext = createContext();

export const RoleProvider = ({ role, children }) => (
  <RoleContext.Provider value={role}>{children}</RoleContext.Provider>
);

// Custom hook to use role context
export const useRole = () => useContext(RoleContext);
