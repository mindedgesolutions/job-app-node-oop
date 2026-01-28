import asyncWrapper from '@/globals/core/async.wrapper.core';
import { allowAccess } from '@/globals/middlewares/allow.access.middleware';
import { verifyUser } from '@/globals/middlewares/verify.user.middleware';
import express from 'express';
import { jobRoleController } from '@/job/controllers/job-role.controller';

const jobRoleRoute = express.Router();

jobRoleRoute.post(
  '/',
  verifyUser,
  allowAccess('RECRUITER'),
  asyncWrapper(jobRoleController.add),
);
jobRoleRoute.get('/', asyncWrapper(jobRoleController.readAll));
jobRoleRoute.delete(
  '/:id',
  verifyUser,
  allowAccess('RECRUITER'),
  asyncWrapper(jobRoleController.delete),
);

export default jobRoleRoute;
