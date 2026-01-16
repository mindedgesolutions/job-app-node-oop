import express from 'express';
import { userController } from '@/user/controllers/user.controller';
import asyncWrapper from '@/globals/core/async.wrapper.core';
import { validateSchema } from '@/globals/middlewares/validate.schema.middleware';
import { userCreateSchema } from '@/user/schemas/user.schema';

const userRoute = express.Router();

userRoute.get('/', asyncWrapper(userController.getAll));
userRoute.post(
  '/',
  validateSchema(userCreateSchema),
  asyncWrapper(userController.create)
);

export default userRoute;
