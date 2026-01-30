import asyncWrapper from '@/globals/core/async.wrapper.core';
import express from 'express';
import { jobSkillsController } from '@/job/controllers/job-skills.controller';
import { verifyUser } from '@/globals/middlewares/verify.user.middleware';
import { allowAccess } from '@/globals/middlewares/allow.access.middleware';

const jobSkillsRoute = express.Router();

jobSkillsRoute.post(
  '/',
  verifyUser,
  allowAccess('RECRUITER'),
  asyncWrapper(jobSkillsController.add),
);

export default jobSkillsRoute;
