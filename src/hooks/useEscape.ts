import React from 'react';

interface KeyboardEvent {
    code: string;
  }


export const useEscape = (callback:() => void) => {

  const escapeFn = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        callback();
      }
    },
    [callback]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', escapeFn, false);
    return () => {
      document.removeEventListener('keydown', escapeFn, false);
    };
  }, [escapeFn]);
  return [escapeFn];
};