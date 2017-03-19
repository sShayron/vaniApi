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
import db from '../db';

const router = new Router();

router.get('/', async (req, res, done) => {
  try {
    done(null, res.status(200).json(await db.members.findAll()));
  } catch (err) {
    done(null, res.status(500));
  }
});

export default router;

