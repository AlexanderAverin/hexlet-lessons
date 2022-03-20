import _ from 'lodash';

import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

const isJpg = (file) => {
  const parsedName = getName(file).split('.');
  return parsedName[parsedName.length - 1] === 'jpg';
};

const getSize = (meta) => meta.size;

const compressImages = (tree) => {
  const children = getChildren(tree);
  const newChildren = children.map((child) => {
    const newMeta = _.cloneDeep(getMeta(child));
    const compressSizeMeta = getSize(newMeta) / 2;
    if (isFile(child) && isJpg(child)) {
      return mkfile(getName(child), { ...newMeta, size: compressSizeMeta });
    }
    if (isFile(child)) {
      return mkfile(getName(child), newMeta);
    }
    return mkdir(getName(child), getChildren(child), newMeta);
  });
  const newMeta = _.cloneDeep(getMeta(tree));
  return mkdir(getName(tree), newChildren, newMeta);
};

// const tree = mkdir('my documents', [
//   mkdir('documents.jpg'),
//   mkfile('avatar.jpg', { size: 100 }),
//   mkfile('passport.jpg', { size: 200 }),
//   mkfile('family.jpg', { size: 150 }),
//   mkfile('addresses', { size: 125 }),
//   mkdir('presentations'),
// ], { test: 'haha' });

