import { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const count = setTimeout(
      () => setDebounceValue(debounceValue),
      delay || 800
    );
    return () => {
      clearTimeout(count);
    };
  }, [value, delay]);

  return value;
};
