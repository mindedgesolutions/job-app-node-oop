import Joi from 'joi';

export const candidateEducationCreateSchema = Joi.object({
  educationId: Joi.number().required().messages({
    'any.required': 'Education ID is required',
    'number.base': 'Education ID must be a number',
  }),
  major: Joi.string().required().messages({
    'any.required': 'Major is required',
    'string.empty': 'Major is required',
    'string.base': 'Major must be a string',
  }),
  degree: Joi.string().required().messages({
    'any.required': 'Degree is required',
    'string.empty': 'Degree is required',
    'string.base': 'Degree must be a string',
  }),
  yearStart: Joi.number().required().messages({
    'any.required': 'Year start is required',
    'string.empty': 'Year start is required',
    'number.base': 'Year start must be a number',
  }),
  yearEnd: Joi.number().required().messages({
    'any.required': 'Year end is required',
    'string.empty': 'Year end is required',
    'number.base': 'Year end must be a number',
  }),
});

// -----------------------------------

export const candidateEducationUpdateSchema = Joi.object({
  major: Joi.string().required().messages({
    'any.required': 'Major is required',
    'string.base': 'Major must be a string',
  }),
  degree: Joi.string().required().messages({
    'any.required': 'Degree is required',
    'string.base': 'Degree must be a string',
  }),
  yearStart: Joi.number().required().messages({
    'any.required': 'Year start is required',
    'number.base': 'Year start must be a number',
  }),
  yearEnd: Joi.number().required().messages({
    'any.required': 'Year end is required',
    'number.base': 'Year end must be a number',
  }),
});
