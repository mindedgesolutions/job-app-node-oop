import asyncWrapper from '@/globals/core/async.wrapper.core';
import { verifyUser } from '@/globals/middlewares/verify.user.middleware';
import express from 'express';
import { candidateExperienceController } from '@/candidate/controllers/candidate-experience.controller';
import { allowAccess } from '@/globals/middlewares/allow.access.middleware';

const candidateExperienceRoute = express.Router();

candidateExperienceRoute.post(
  '/',
  verifyUser,
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
  asyncWrapper(candidateExperienceController.update),
);
candidateExperienceRoute.delete(
  '/:expId',
  verifyUser,
  asyncWrapper(candidateExperienceController.delete),
);

export default candidateExperienceRoute;
