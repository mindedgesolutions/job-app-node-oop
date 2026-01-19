import express from 'express';
import asyncWrapper from '@/globals/core/async.wrapper.core';
import { verifyUser } from '@/globals/middlewares/verify.user.middleware';
import { candidateLanguageController } from '@/candidate/controllers/candidate-language.controller';
import { allowAccess } from '@/globals/middlewares/allow.access.middleware';
import { validateSchema } from '@/globals/middlewares/validate.schema.middleware';
import {
  candidateLanguageCreateSchema,
  candidateLanguageUpdateSchema,
} from '@/candidate/schemas/candidate-language.schema';

const candidateLanguageRoute = express.Router();

candidateLanguageRoute.post(
  '/',
  verifyUser,
  validateSchema(candidateLanguageCreateSchema),
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
  validateSchema(candidateLanguageUpdateSchema),
  asyncWrapper(candidateLanguageController.updateLevel)
);
candidateLanguageRoute.delete(
  '/:languageName',
  verifyUser,
  asyncWrapper(candidateLanguageController.delete)
);

export default candidateLanguageRoute;
