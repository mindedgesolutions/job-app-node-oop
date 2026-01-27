import asyncWrapper from '@/globals/core/async.wrapper.core';
import { verifyUser } from '@/globals/middlewares/verify.user.middleware';
import express from 'express';
import { companyImageController } from '@/company/controllers/company.image.controller';
import { allowAccess } from '@/globals/middlewares/allow.access.middleware';
import { uploadCompanyImage } from '@/globals/helpers/upload.helper';

const companyImageRoute = express.Router();

companyImageRoute.post(
  '/:companyId',
  verifyUser,
  allowAccess('RECRUITER'),
  uploadCompanyImage.array('images', 10),
  asyncWrapper(companyImageController.add),
);

export default companyImageRoute;
