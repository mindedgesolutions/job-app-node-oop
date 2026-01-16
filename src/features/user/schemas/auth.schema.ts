import Joi from 'joi';

export const signupSchema = Joi.object({
  name: Joi.string().required().max(30).messages({
    'string.empty': 'Name is required',
    'string.max': 'Name must be at most 30 characters long',
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Invalid email',
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Password is required',
    'string.min': 'Password must be at least 6 characters long',
  }),
  role: Joi.string().valid('CANDIDATE', 'RECRUITER').required().messages({
    'any.only': 'Role must be either CANDIDATE or RECRUITER',
    'string.empty': 'Role is required',
  }),
});

// ---------------------------------

export const signinSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Invalid email',
  }),
  password: Joi.string().required().messages({
    'string.empty': 'Password is required',
  }),
});
