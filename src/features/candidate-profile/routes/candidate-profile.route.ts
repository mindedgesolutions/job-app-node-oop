import asyncWrapper from '@/globals/core/async.wrapper.core';
import { verifyUser } from '@/globals/middlewares/verify.user.middleware';
import express from 'express';
import { candidateProfileController } from '@/candidate/controllers/candidate-profile.controller';
import { checkPermission } from '@/globals/middlewares/check.permission.middleware';
import { allowAccess } from '@/globals/middlewares/allow.access.middleware';
import { validateSchema } from '@/globals/middlewares/validate.schema.middleware';
import { candidateProfileCreateSchema } from '@/candidate/schemas/candidate-profile.schema';

const candidateProfileRoute = express.Router();

candidateProfileRoute.post(
  '/',
  verifyUser,
  validateSchema(candidateProfileCreateSchema),
  asyncWrapper(candidateProfileController.create)
);
candidateProfileRoute.get(
  '/',
  verifyUser,
  allowAccess('ADMIN', 'RECRUITER'),
  asyncWrapper(candidateProfileController.readAll)
);
candidateProfileRoute.get(
  '/:id',
  verifyUser,
  checkPermission('candidateProfile', 'userId'),
  asyncWrapper(candidateProfileController.readOne)
);
candidateProfileRoute.put(
  '/:id',
  verifyUser,
  checkPermission('candidateProfile', 'userId'),
  validateSchema(candidateProfileCreateSchema),
  asyncWrapper(candidateProfileController.update)
);
candidateProfileRoute.delete(
  '/:id',
  verifyUser,
  checkPermission('candidateProfile', 'userId'),
  asyncWrapper(candidateProfileController.delete)
);

export default candidateProfileRoute;
