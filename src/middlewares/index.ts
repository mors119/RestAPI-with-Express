import express from 'express';
// lodash - 기본 cjs임. es 설치하거나 부분 경로 import(트리셰이킹 우선)
import get from 'lodash/get.js';
import merge from 'lodash/merge.js';

import { getUserBySessionToken } from '../db/user.js';

export const isOwner = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, 'identity._id') as string | undefined;

    if (!currentUserId) {
      return res.sendStatus(403);
    }

    if (currentUserId.toString() !== id) {
      return res.sendStatus(403);
    }

    return next();
  } catch (error) {
    return res.sendStatus(400);
  }
};

export const isAuthenticated = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const sessionToke = req.cookies['HEE-SE-ONG-AUTH'];

    if (!sessionToke) {
      return res.sendStatus(403);
    }

    const existingUser = await getUserBySessionToken(sessionToke);

    if (!existingUser) {
      return res.sendStatus(403);
    }

    merge(req, { identity: existingUser });

    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
