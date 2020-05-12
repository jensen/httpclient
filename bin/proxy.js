const express = require('express');
const axios = require('axios');
const bodyparser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(bodyparser.json());
app.use('/proxy', (request, response) => {
  const { host, path, bodydata } = request.body;
  const { method } = request;

  if (!/^https?:\/\//.test(host)) {
    response
      .status(400)
      .send('Must include protocol in request. eg. https://example.com');
  }

  const url = `${host}${path.startsWith('/') ? '' : '/'}${path}`;

  const config =
    bodydata.length > 0
      ? {
          method,
          url,
          data: bodydata.reduce(
            (data, pair) => ({
              ...data,
              [pair.key]: pair.value,
            }),
            {},
          ),
        }
      : { method, url };

  axios(config)
    .then(({ data }) => response.send(data))
    .catch((error) => console.log(error));
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
