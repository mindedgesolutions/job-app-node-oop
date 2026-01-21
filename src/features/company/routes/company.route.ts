import asyncWrapper from '@/globals/core/async.wrapper.core';
import { verifyUser } from '@/globals/middlewares/verify.user.middleware';
import express from 'express';
import { companyController } from '@/company/controllers/company.controller';
import { allowAccess } from '@/globals/middlewares/allow.access.middleware';
import { validateSchema } from '@/globals/middlewares/validate.schema.middleware';
import { companySchema } from '@/company/schemas/company.schema';

const companyRoute = express.Router();

companyRoute.post(
  '/',
  verifyUser,
  allowAccess('RECRUITER'),
  validateSchema(companySchema),
  asyncWrapper(companyController.create),
);
companyRoute.get('/', asyncWrapper(companyController.readAll));
companyRoute.get(
  '/unapproved',
  verifyUser,
  allowAccess('ADMIN'),
  asyncWrapper(companyController.readUnapproved),
);
companyRoute.put(
  '/:companyId',
  verifyUser,
  allowAccess('RECRUITER'),
  validateSchema(companySchema),
  asyncWrapper(companyController.update),
);
companyRoute.delete(
  '/:companyId',
  verifyUser,
  allowAccess('RECRUITER'),
  asyncWrapper(companyController.delete),
);
companyRoute.put(
  '/:companyId/toggle-status',
  verifyUser,
  allowAccess('ADMIN'),
  asyncWrapper(companyController.toggleStatus),
);

export default companyRoute;
