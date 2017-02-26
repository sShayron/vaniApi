/**
 * Node.js API Starter Kit (https://reactstarter.com/nodejs)
 *
 * Copyright © 2016-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* @flow */
/* eslint-disable no-param-reassign */

import { Router } from 'express';
import { findAll } from '../db/members';

const router = new Router();

router.get('/', (req, res) => {
  findAll().then( ( member ) => {
    res.status(200).json( member );
  });

});

export default router;