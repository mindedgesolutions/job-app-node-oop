import Joi from 'joi';

export const companySchema = Joi.object({
  name: Joi.string().required().max(255).messages({
    'any.required': 'Company name is required',
    'string.empty': 'Company name is required',
    'string.max': 'Company name must be less than or equal to 255 characters',
  }),
  description: Joi.string().optional().allow('').max(255).messages({
    'string.max': 'Description must be less than or equal to 255 characters',
  }),
  address: Joi.string().required().max(255).messages({
    'any.required': 'Address is required',
    'string.empty': 'Address is required',
    'string.max': 'Address must be less than or equal to 255 characters',
  }),
  teamSize: Joi.number().required().min(1).messages({
    'any.required': 'Team size is required',
    'number.base': 'Team size must be a number',
  }),
  estDate: Joi.string().isoDate().required().messages({
    'any.required': 'Establishment date is required',
    'date.base': 'Establishment date must be a valid date',
  }),
  websiteUrl: Joi.string().uri().optional().messages({
    'string.uri': 'Website URL must be a valid URL',
  }),
  mapLink: Joi.string().uri().optional().messages({
    'string.uri': 'Map link must be a valid URL',
  }),
});
