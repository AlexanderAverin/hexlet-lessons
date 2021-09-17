import path from 'path';

import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta, isDirectory,
} from '@hexlet/immutable-fs-trees';

const findFilesByName = (tree, str) => {
  const iter = (node, ancestry) => {
    const name = getName(node);
    if (isFile(node) && name.includes(str)) {
      return path.join(ancestry, name);
    }
    if (isFile(node) && !name.includes(str)) {
      return [];
    }
    const children = getChildren(node);
    return children.flatMap((child) => iter(child, path.join(ancestry, name)));
  };
  return iter(tree, '');
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

console.log(findFilesByName(tree, 'h'));
console.log(tree.children[0]);
