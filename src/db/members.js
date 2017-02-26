/**
 * Node.js API Starter Kit (https://reactstarter.com/nodejs)
 *
 * Copyright © 2016-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* @flow */

import db from './pool';

export function findById(id: number) {
  return db
    .query('SELECT id, name, email FROM members WHERE id = $1', [id])
    .then(({ rows }) => rows.length ? rows[0] : null);
}

export function findAll() {
  return db
    .query('SELECT id, name, email FROM members' )
    .then(({ rows }) => rows.length ? rows : null);
}

export function any(name: string) {
  return db.query('SELECT EXISTS(SELECT 1 FROM members WHERE email = $1)', [name])
    .then(x => x.rows[0].exists);
}

export function create(name: string, email: string) {
  return db.query('INSERT INTO members (name, email) VALUES ($1, $2) RETURNING id', [name, email])
    .then(({ rows }) => findById(rows[0].id));
}
