import fs from 'fs';

const watch = (filepath, chekingInterval, cb) => {
  let lastFileChangeTime = Date.now();
  const check = (id) => {
    fs.stat(filepath, (error, stat) => {
      if (error) {
        clearInterval(id);
        cb(error);
        return;
      }
      if (lastFileChangeTime < stat.mtimeMs) {
        cb(null);
      }
      lastFileChangeTime = stat.mtimeMs;
    });
  };
  const intervalId = setInterval(() => check(intervalId), chekingInterval);

  check(intervalId);

  return intervalId;
};

export default watch;

watch('file.txt', 2000, () => {
  console.log('Changed');
});

setInterval(() => fs.appendFileSync('file.txt', 'ehu'), 300);
