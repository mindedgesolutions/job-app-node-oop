import asyncWrapper from '@/globals/core/async.wrapper.core';
import { verifyUser } from '@/globals/middlewares/verify.user.middleware';
import express from 'express';
import { candidateEducationController } from '@/candidate/controllers/candidate-education.controller';
import { allowAccess } from '@/globals/middlewares/allow.access.middleware';
import { validateSchema } from '@/globals/middlewares/validate.schema.middleware';
import {
  candidateEducationCreateSchema,
  candidateEducationUpdateSchema,
} from '@/candidate/schemas/candidate-education.schema';

const candidateEducationRoute = express.Router();

candidateEducationRoute.post(
  '/',
  verifyUser,
  validateSchema(candidateEducationCreateSchema),
  asyncWrapper(candidateEducationController.create),
);
candidateEducationRoute.get(
  '/',
  verifyUser,
  allowAccess('ADMIN', 'RECRUITER'),
  asyncWrapper(candidateEducationController.readAll),
);
candidateEducationRoute.get(
  '/me',
  verifyUser,
  asyncWrapper(candidateEducationController.readMyEducation),
);
candidateEducationRoute.put(
  '/',
  verifyUser,
  validateSchema(candidateEducationUpdateSchema),
  asyncWrapper(candidateEducationController.update),
);
candidateEducationRoute.delete(
  '/:educationId',
  verifyUser,
  asyncWrapper(candidateEducationController.delete),
);

export default candidateEducationRoute;
