import express from 'express';
import asyncWrapper from '@/globals/core/async.wrapper.core';
import { authController } from '@/user/controllers/auth.controller';
import { signinSchema, signupSchema } from '@/user/schemas/auth.schema';
import { validateSchema } from '@/globals/middlewares/validate.schema.middleware';
import { verifyUser } from '@/globals/middlewares/verify.user.middleware';

const authRoute = express.Router();

authRoute.post(
  '/signup',
  validateSchema(signupSchema),
  asyncWrapper(authController.signup)
);
authRoute.post(
  '/signin',
  validateSchema(signinSchema),
  asyncWrapper(authController.signin)
);
authRoute.get(
  '/me',
  asyncWrapper(verifyUser),
  asyncWrapper(authController.getCurrentUser)
);
authRoute.post(
  '/logout',
  asyncWrapper(verifyUser),
  asyncWrapper(authController.logout)
);

export default authRoute;
