import Joi from 'joi';

export const jobSchema = Joi.object({
  jobRoleId: Joi.number().integer().required().messages({
    'number.base': 'Job Role ID must be a number',
    'number.integer': 'Job Role ID must be an integer',
    'any.required': 'Job Role ID is required',
  }),
  title: Joi.string().min(3).max(100).required().messages({
    'any.required': 'Title is required',
    'string.empty': 'Title is required',
    'string.min': 'Title must be at least 3 characters long',
    'string.max': 'Title cannot exceed 100 characters',
  }),
  description: Joi.string().max(200).required().messages({
    'any.required': 'Description is required',
    'string.empty': 'Description is required',
    'string.max': 'Description cannot exceed 200 characters',
  }),
  minSalary: Joi.number().integer().min(0).required().messages({
    'number.base': 'Minimum Salary must be a number',
    'any.required': 'Minimum Salary is required',
    'number.integer': 'Minimum Salary must be an integer',
    'number.min': 'Minimum Salary cannot be negative',
  }),
  maxSalary: Joi.number().integer().min(0).required().messages({
    'number.base': 'Maximum Salary must be a number',
    'any.required': 'Maximum Salary is required',
    'number.integer': 'Maximum Salary must be an integer',
    'number.min': 'Maximum Salary cannot be negative',
  }),
});
