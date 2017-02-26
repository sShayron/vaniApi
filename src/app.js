/**
 * Node.js API Starter Kit (https://reactstarter.com/nodejs)
 *
 * Copyright © 2016-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* @flow */

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import flash from 'express-flash';
import expressGraphQL from 'express-graphql';
import PrettyError from 'pretty-error';
import passport from './passport';
import schema from './schema';
//routes
import accountRoutes from './routes/account';
import membersRoutes from './routes/members';

const app = express();

app.set('trust proxy', 'loopback');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  name: 'sid',
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');

  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(accountRoutes);
app.use('/members', membersRoutes);

app.use('/graphql', expressGraphQL(req => ({
  schema,
  context: {
    user: req.user,
  },
  graphiql: process.env.NODE_ENV !== 'production',
  pretty: process.env.NODE_ENV !== 'production',
})));

app.get('/', (req, res) => {
  if (req.user) {
    res.send(`<p>Bem vindo, ${req.user.name}! (<a href="/logout">logout</a>)</p>`);
    console.log(req.user);
  } else {
    res.send('<p>Seja bem-vindo! (<a href="/login/facebook" style="color: blue;">Login com FACEBOOK</a>)</p>');
    // res.json({"project": "VaniAPI"});
  }
});

const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => {
  process.stderr.write(pe.render(err));
  next();
});

export default app;
