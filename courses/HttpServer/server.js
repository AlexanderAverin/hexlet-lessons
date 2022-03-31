import http from 'http';

import parse from './parser.js';

const search = (obj, substring) => Object.entries(obj)
  .flatMap(([, personData]) => {
    const personName = personData.name.toLowerCase();
    return personName.includes(substring.toLowerCase()) ? personData : [];
  });

const server = http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
  }).on('end', (err) => {
    console.error(err);
  });

  response.statusMessage = 200;
  response.setHeader('Content-Type', 'application/json');

  response.end(`${request.url}\n`);
});

const port = 4000;

server.listen(port, () => {
  console.log('Server has been started');
});
