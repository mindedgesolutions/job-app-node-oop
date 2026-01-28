import express from 'express';
import asyncWrapper from '@/globals/core/async.wrapper.core';
import { allowAccess } from '@/globals/middlewares/allow.access.middleware';
import { verifyUser } from '@/globals/middlewares/verify.user.middleware';
import { companyIndustryController } from '@/company/controllers/company-industry.controller';

const companyIndustryRoute = express.Router();

companyIndustryRoute.post(
  '/:companyId',
  verifyUser,
  allowAccess('RECRUITER'),
  asyncWrapper(companyIndustryController.add),
);
companyIndustryRoute.get(
  '/:companyId',
  asyncWrapper(companyIndustryController.read),
);
companyIndustryRoute.get('/', asyncWrapper(companyIndustryController.readAll));
companyIndustryRoute.delete(
  '/:companyId',
  verifyUser,
  allowAccess('RECRUITER'),
  asyncWrapper(companyIndustryController.delete),
);

export default companyIndustryRoute;
