import _ from 'lodash';

import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

const isHiddenFile = (fileName) => fileName[0] === '.';

const getHiddenFilesCount = (tree) => {
  const name = getName(tree);
  if (isFile(tree) && isHiddenFile(name)) {
    return 1;
  }
  if (!isFile(tree)) {
    const children = getChildren(tree);
    const hiddenFileCount = children.map(getHiddenFilesCount);
    return _.sum(hiddenFileCount);
  }
};

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('.nginx.conf', { size: 800 }),
    ]),
    mkdir('.consul', [
      mkfile('.config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('.hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

console.log(getHiddenFilesCount(tree));
