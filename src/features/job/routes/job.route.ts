import asyncWrapper from '@/globals/core/async.wrapper.core';
import { allowAccess } from '@/globals/middlewares/allow.access.middleware';
import { verifyUser } from '@/globals/middlewares/verify.user.middleware';
import express from 'express';
import { jobController } from '@/job/controllers/job.controller';
import { validateSchema } from '@/globals/middlewares/validate.schema.middleware';
import { jobSchema } from '@/job/schemas/job.schema';

const jobRoute = express.Router();

jobRoute.post(
  '/',
  verifyUser,
  allowAccess('RECRUITER'),
  validateSchema(jobSchema),
  asyncWrapper(jobController.create),
);
jobRoute.get('/', asyncWrapper(jobController.readAll));
jobRoute.get(
  '/me',
  verifyUser,
  allowAccess('RECRUITER'),
  asyncWrapper(jobController.readMyJobs),
);
jobRoute.get('/:jobId', asyncWrapper(jobController.readOne));
jobRoute.put(
  '/:jobId',
  verifyUser,
  allowAccess('RECRUITER'),
  validateSchema(jobSchema),
  asyncWrapper(jobController.update),
);
jobRoute.delete(
  '/:jobId',
  verifyUser,
  allowAccess('RECRUITER'),
  asyncWrapper(jobController.delete),
);

export default jobRoute;
