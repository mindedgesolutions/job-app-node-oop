import Joi from 'joi';

export const candidateExperienceSchema = Joi.object({
  company: Joi.string().required().max(255).messages({
    'any.required': 'Company is required',
    'string.empty': 'Company is required',
    'string.max': 'Company must be at most 255 characters long',
  }),
  department: Joi.string().required().max(255).messages({
    'any.required': 'Department is required',
    'string.empty': 'Department is required',
    'string.max': 'Department must be at most 255 characters long',
  }),
  responsibilities: Joi.string().required().max(255).messages({
    'any.required': 'Responsibilities are required',
    'string.empty': 'Responsibilities are required',
    'string.max': 'Responsibilities must be at most 255 characters long',
  }),
  startDate: Joi.string().isoDate().required().messages({
    'any.required': 'Start date is required',
    'string.empty': 'Start date is required',
    'date.base': 'Start date must be a valid date',
  }),
  endDate: Joi.string().isoDate().optional().messages({
    'date.base': 'End date must be a valid date',
  }),
  currentlyWorking: Joi.boolean().required().messages({
    'any.required': 'Currently working status is required',
    'boolean.base': 'Currently working must be a boolean',
  }),
});
