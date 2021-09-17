import _ from 'lodash';

import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta, isDirectory,
} from '@hexlet/immutable-fs-trees';

const compare = (a, b) => {
  if (a[1] === b[1]) {
    return 0;
  }
  return a[1] > b[1] ? -1 : 1;
};

const getFilesSize = (node) => {
  if (isFile(node)) {
    return getMeta(node).size;
  }
  const children = getChildren(node);
  const filesSizes = children.map(getFilesSize);
  return _.sum(filesSizes);
};

const du = (tree) => getChildren(tree)
  .map((child) => [getName(child), getFilesSize(child)])
  .sort(compare);

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf', { size: 800 }),
    ]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

console.log((du(getChildren(tree)[0])));
