import _ from 'lodash';

import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

const changeOwner = (tree, owner) => {
  const children = getChildren(tree);
  const copiedMeta = _.cloneDeep(getMeta(tree));
  copiedMeta.owner = owner;
  if (isFile(tree)) {
    return mkfile(getName(tree), copiedMeta);
  }
  const newChildren = children.map((child) => changeOwner(child, owner));
  const newTree = mkdir(getName(tree), newChildren, copiedMeta);
  return newTree;
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

console.log(changeOwner(tree, 'user'));
