file.js
Реализуйте и экспортируйте асинхронную функцию getDirectorySize(), которая считает размер переданной директории (не включая поддиректории).

Пример:
import { getDirectorySize } from './file.js';
 
getDirectorySize('/usr/local/bin').then(console.log);
Подсказка
fsPromises.readdir - чтение содержимого директории
path.join - конструирует пути
fsPromises.stat - информация о файле
_.sumBy - нахождение суммы в массиве


<code>
import path from 'path';
import _ from 'lodash';
import fs from 'fs/promises';

const getFilePath = (dirPath, filename) => path.join(dirPath, filename);

const getDirectorySize = (dirPath) => {
  // const data = fs.readdir(dirPath).then((files) => files.map((filename) => fs.readFile(getFilePath(dirPath, filename), 'utf-8')));
  const test = fs.readdir(dirPath).then((t) => t.map((file) => fs.readFile(getFilePath(dirPath, file), 'utf-8')));
  const promise = Promise.all(test);
  return promise.then((res) => res);
};

getDirectorySize('./').then(console.log);
</code>

<code>
mport path from 'path';
import fs from 'fs';
import { getDirectorySize } from '../file.js';

const getPath = (dirpath) => path.join('__fixtures__', dirpath);

test('getDirectorySize 1', () => {
  const dirpath = getPath('/undefined');
  const promise = getDirectorySize(dirpath);
  return expect(promise).rejects.toThrow();
});

test('getDirectorySize 2', () => {
  const dirpath = getPath('/opt');
  if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath);
  }
  const promise = getDirectorySize(dirpath);
  return expect(promise).resolves.toBe(0);
});

test('getDirectorySize 3', () => {
  const dirpath = getPath('/usr/local/bin');
  const promise = getDirectorySize(dirpath);
  return expect(promise).resolves.toBe(1240);
});

test('getDirectorySize 4', () => {
  const dirpath = getPath('/usr/local/lib');
  const promise = getDirectorySize(dirpath);
  return expect(promise).resolves.toBe(0);
});

</code>