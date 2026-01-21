import asyncWrapper from '@/globals/core/async.wrapper.core';
import { verifyUser } from '@/globals/middlewares/verify.user.middleware';
import express from 'express';
import { candidateExperienceController } from '@/candidate/controllers/candidate-experience.controller';
import { allowAccess } from '@/globals/middlewares/allow.access.middleware';
import { validateSchema } from '@/globals/middlewares/validate.schema.middleware';
import { candidateExperienceSchema } from '@/candidate/schemas/candidate-experience.schema';

const candidateExperienceRoute = express.Router();

candidateExperienceRoute.post(
  '/',
  verifyUser,
  validateSchema(candidateExperienceSchema),
  asyncWrapper(candidateExperienceController.create),
);
candidateExperienceRoute.get(
  '/',
  verifyUser,
  allowAccess('ADMIN'),
  asyncWrapper(candidateExperienceController.readAll),
);
candidateExperienceRoute.get(
  '/me',
  verifyUser,
  asyncWrapper(candidateExperienceController.readCandidateExperience),
);
candidateExperienceRoute.put(
  '/:expId',
  verifyUser,
  validateSchema(candidateExperienceSchema),
  asyncWrapper(candidateExperienceController.update),
);
candidateExperienceRoute.delete(
  '/:expId',
  verifyUser,
  asyncWrapper(candidateExperienceController.delete),
);

export default candidateExperienceRoute;
