import { useEffect } from 'react';

export default (key, value, sync, clearOnUnmount) => {
  useEffect(() => {
    const existing = localStorage.getItem(key);

    if (existing) {
      sync(JSON.parse(existing));
    }
  }, [key, sync]);

  useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [
    key,
    value,
  ]);

  useEffect(
    () => () => {
      if (clearOnUnmount) {
        localStorage.removeItem(key);
      }
    },
    [key, clearOnUnmount],
  );
};
