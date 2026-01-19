import express from 'express';
import asyncWrapper from '@/globals/core/async.wrapper.core';
import { verifyUser } from '@/globals/middlewares/verify.user.middleware';
import { candidateLanguageController } from '@/candidate/controllers/candidate-language.controller';
import { allowAccess } from '@/globals/middlewares/allow.access.middleware';

const candidateLanguageRoute = express.Router();

candidateLanguageRoute.post(
  '/',
  verifyUser,
  asyncWrapper(candidateLanguageController.create)
);
candidateLanguageRoute.get(
  '/me',
  verifyUser,
  asyncWrapper(candidateLanguageController.readMyLanguages)
);
candidateLanguageRoute.get(
  '/all',
  verifyUser,
  allowAccess('ADMIN'),
  asyncWrapper(candidateLanguageController.readAll)
);
candidateLanguageRoute.put(
  '/:languageName',
  verifyUser,
  asyncWrapper(candidateLanguageController.updateLevel)
);

export default candidateLanguageRoute;
