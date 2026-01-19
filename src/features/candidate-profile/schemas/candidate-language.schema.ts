import Joi from 'joi';
import { Level } from 'generated/prisma';

export const candidateLanguageCreateSchema = Joi.object({
  languageName: Joi.string().required().messages({
    'any.required': 'Language name is required',
    'string.empty': 'Language name cannot be empty',
  }),
  level: Joi.string()
    .valid(Level.BASIC, Level.INTERMEDIATE, Level.ADVANCED)
    .required()
    .messages({
      'any.required': 'Level is required',
      'any.only': 'Level must be one of BASIC, INTERMEDIATE or ADVANCED',
    }),
});

// ----------------------------------------------

export const candidateLanguageUpdateSchema = Joi.object({
  level: Joi.string()
    .valid(Level.BASIC, Level.INTERMEDIATE, Level.ADVANCED)
    .required()
    .messages({
      'any.required': 'Level is required',
      'any.only': 'Level must be one of BASIC, INTERMEDIATE or ADVANCED',
    }),
});
