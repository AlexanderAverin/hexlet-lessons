import _ from 'lodash';

import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

const getNodesCount = (tree) => {
  if (isFile(tree)) {
    return 1;
  }
  const children = getChildren(tree);
  const childrensCount = children.map(getNodesCount);
  return 1 + _.sum(childrensCount);
};

const tree = mkdir('/', [
  mkdir('etc', [
    mkfile('bashrc'),
    mkfile('consul.cfg'),
  ]),
  mkfile('hexletrc'),
  mkdir('bin', [
    mkfile('ls'),
    mkfile('cat'),
  ]),
]);

console.log(getNodesCount(tree));
