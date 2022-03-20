import _ from 'lodash';

import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

const downcaseFileNames = (tree) => {
  const children = getChildren(tree);
  const newName = getName(tree).toLowerCase();
  const newMeta = _.cloneDeep(getMeta(tree));
  if (isFile(tree)) {
    return mkfile(newName, newMeta);
  }
  const newChildren = children.map((child) => downcaseFileNames(child));
  const newTree = mkdir(getName(tree), newChildren, newMeta);
  return newTree;
};

const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);

console.log(downcaseFileNames(tree));
