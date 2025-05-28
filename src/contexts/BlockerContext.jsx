import { createContext, useRef } from 'react';

export const BlockerContext = createContext();

export const BlockerProvider = ({ children }) => {
  const blockerRef = useRef(null);

  return (
    <BlockerContext.Provider value={blockerRef}>
      {children}
    </BlockerContext.Provider>
  );
};
