import fs from 'fs/promises';

const getTypes = (paths) => {
  const initPromise = Promise.resolve([]);
  const promise = paths.reduce((acc, path) => {
    const newAcc = acc.then((allAcc) => fs
      .stat(path).then((data) => [...allAcc, data.isDirectory() ? 'directory' : 'file']).catch(() => [...allAcc, null]));

    return newAcc;
  }, initPromise);

  return promise;
};

getTypes([]).then(console.log);
