import _ from 'lodash';

import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

const changeOwner = (tree, owner) => {
  const children = getChildren(tree);
  const newChildren = children.map(() => {
  })
};

