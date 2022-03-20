import _ from 'lodash';

import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta, isDirectory,
} from '@hexlet/immutable-fs-trees';

const findEmpertyDirectorys = (tree, depth = Infinity) => {
  const iter = (node, currectDepth) => {
    const children = getChildren(node);
    if (children.length === 0) {
      return getName(node);
    }
    if (currectDepth === depth) {
      return [];
    }
    return children.filter((child) => isDirectory(child))
      .flatMap((child) => iter(child, currectDepth + 1));
  };
  return iter(tree, 0);
};

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [
      mkfile('nginx.conf'),
    ]),
    mkdir('consul', [
      mkfile('config.json'),
      mkdir('data'),
    ]),
  ]),
  mkdir('logs'),
  mkfile('hosts'),
]);

console.log(findEmpertyDirectorys(tree, 2));
