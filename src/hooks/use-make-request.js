import { useContext } from 'react';
import { RequestHostContext } from 'context/request';
import axios from 'axios';
import {
  bytes as formatBytes,
  milliseconds as formatMilliseconds,
  json as prettyjson,
} from 'utils/format';

export default ({ method, path, bodydata }) => {
  const { host, setResponse } = useContext(RequestHostContext);

  if (host === undefined) {
    throw new Error('useMakeRequest must be used within a RequestProvider');
  }

  const proxyRequest = () => {
    const start = new Date();

    axios({
      method: 'post',
      url: '/proxy',
      data: {
        method,
        host,
        path,
        bodydata,
      },
    })
      .then((response) => {
        const body =
          typeof response.data === 'string'
            ? response.data
            : JSON.stringify(response.data);

        setResponse({
          body: prettyjson(body),
          duration: formatMilliseconds(new Date() - start),
          status: `${response.status} ${response.statusText}`,
          size: formatBytes(body.length),
        });
      })
      .catch((error) => console.log(error));
  };

  return proxyRequest;
};
