import express from 'express';
import passport from 'passport';


export function isAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}
