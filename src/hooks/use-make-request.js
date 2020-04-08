import { useContext } from 'react';
import { RequestHostContext } from 'context/request';

export default ({ path, bodydata }) => {
  const host = useContext(RequestHostContext);

  if (host === undefined) {
    throw new Error('useMakeRequest must be used within a RequestProvider');
  }

  return () => console.log(`${host}/${path}`);
};
