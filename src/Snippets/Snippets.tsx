import React from 'react';

export const SnippetsContext = React.createContext({});

export const Snippets = ({
                           columns = null,
                           gap = '14px',
                           loading = null,
                           errorMessage = null,
                           children,
                           itemWidth,
                           ...props
                         }) => {
  return (
    <SnippetsContext.Provider value={{
      loading,
      errorMessage,
      columns,
      gap,
      itemWidth
    }}>
      <div id="scrollableDiv" style={{overflowY: 'auto', height: 'inherit'}}>
        {children}
      </div>
    </SnippetsContext.Provider>
  );
};
