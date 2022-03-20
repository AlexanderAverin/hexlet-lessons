import _ from 'lodash';

import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

const getNodesCount = (tree) => {
  if (isFile(tree)) {
    return 1;
  }
  const children = getChildren(tree);
  const filesCount = children.map(getNodesCount);
  return _.sum(filesCount);
};

const getSubdirectoriesInfo = (tree) => getChildren(tree)
  .filter((child) => !isFile(child))
  .map((child) => [getName(child), getNodesCount(child)]);

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf'),
    ]),
  ]),
  mkdir('consul', [
    mkfile('config.json'),
    mkfile('file.tmp'),
    mkdir('data'),
  ]),
  mkfile('hosts'),
  mkfile('resolve'),
]);

console.log(getSubdirectoriesInfo(tree));