import Joi from 'joi';

export const candidateProfileCreateSchema = Joi.object({
  fullName: Joi.string().required().max(50).messages({
    'string.empty': 'Full name is required',
    'string.max': 'Full name must be at most 50 characters long',
  }),
  gender: Joi.string().required().messages({
    'string.empty': 'Gender is required',
  }),
  phone: Joi.string().required().messages({
    'string.empty': 'Phone is required',
  }),
  cv: Joi.string().required().messages({
    'string.empty': 'CV is required',
  }),
  birthday: Joi.string().isoDate().required().messages({
    'string.empty': 'Birthday is required',
  }),
  address: Joi.string().required().messages({
    'string.empty': 'Address is required',
  }),
});
