import asyncWrapper from '@/globals/core/async.wrapper.core';
import { allowAccess } from '@/globals/middlewares/allow.access.middleware';
import { verifyUser } from '@/globals/middlewares/verify.user.middleware';
import express from 'express';
import { applyController } from '@/apply/controllers/apply.controller';

const applyRoute = express.Router();

applyRoute.post(
  '/',
  verifyUser,
  allowAccess('CANDIDATE'),
  asyncWrapper(applyController.add),
);
applyRoute.get(
  '/',
  verifyUser,
  allowAccess('CANDIDATE'),
  asyncWrapper(applyController.getAppliedJobs),
);

export default applyRoute;
