import Joi from 'joi';

export const candidateProfileSchema = Joi.object({
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

// ----------------------------------

export const candidateProfileOpenToWorkSchema = Joi.object({
  openToWork: Joi.boolean().required().messages({
    'any.required': 'Open to work status is required',
    'boolean.base': 'Open to work must be a TRUE / FALSE value',
  }),
});
