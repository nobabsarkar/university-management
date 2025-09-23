import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .required()
    .custom((value, helpers) => {
      const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
      if (firstNameStr !== value) {
        return helpers.error('any.invalid');
      }
      return value;
    })
    .messages({
      'any.required': 'First Name is required',
      'string.max': 'First Name can not be more than 20 characters',
      'any.invalid': '{#value} is not in capitalize format',
    }),
  middleName: Joi.string().trim().allow('', null),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[A-Za-z]+$/)
    .messages({
      'any.required': 'Last Name is required',
      'string.pattern.base': '{#value} is not valid',
    }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'any.required': 'Father Name is required',
  }),
  fatherOccupation: Joi.string().required().messages({
    'any.required': 'Father occupation is required',
  }),
  fatherContactNo: Joi.string().required().messages({
    'any.required': 'Father Contact No is required',
  }),
  motherName: Joi.string().required().messages({
    'any.required': 'Mother Name is required',
  }),
  motherOccupation: Joi.string().required().messages({
    'any.required': 'Mother occupation is required',
  }),
  motherContactNo: Joi.string().required().messages({
    'any.required': 'Mother Contact No is required',
  }),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Local Guardian Name is required',
  }),
  occupation: Joi.string().required().messages({
    'any.required': 'Local Guardian Occupation is required',
  }),
  contactNo: Joi.string().required().messages({
    'any.required': 'Local Guardian Contact No is required',
  }),
  address: Joi.string().required().messages({
    'any.required': 'Local Guardian Address is required',
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'any.required': 'ID is required',
  }),
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.required': 'Gender is required',
    'any.only': '{#value} is not a valid gender',
  }),
  dateOfBirth: Joi.string().optional(),
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.email': '{#value} is not a valid email type',
  }),
  contactNo: Joi.string().required().messages({
    'any.required': 'Contact No is required',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'any.required': 'Emergency Contact No is required',
  }),
  bloodGroup: Joi.string().valid(
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ),
  presentAddress: Joi.string().required().messages({
    'any.required': 'Present Address is required',
  }),
  permanentAddress: Joi.string().required().messages({
    'any.required': 'Permanent Address is required',
  }),
  gurdian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImg: Joi.string().uri().optional(),
  isActive: Joi.string().valid('active', 'block').default('active'),
});

export default studentValidationSchema;
