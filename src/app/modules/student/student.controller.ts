import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import Joi from 'joi';

const createStudent = async (req: Request, res: Response) => {
  try {
    // creating a schema validation suing Joi
    const studentSchema = Joi.object({
      id: Joi.string().required(),
      name: Joi.object({
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
      }).required(),
      gender: Joi.string().valid('male', 'female', 'other').required(),
      dateOfBirth: Joi.string().optional(),
      email: Joi.string().email().required().messages({
        'any.required': 'Email is required',
        'string.email': '{#value} is not a valid email type',
      }),
      contactNo: Joi.string().required(),
      emergencyContactNo: Joi.string().required(),
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
      presentAddress: Joi.string().required(),
      permanentAddress: Joi.string().required(),
      gurdian: Joi.object({
        fatherName: Joi.string().required(),
        fatherOccupation: Joi.string().required(),
        fatherContactNo: Joi.string().required(),
        motherName: Joi.string().required(),
        motherOccupation: Joi.string().required(),
        motherContactNo: Joi.string().required(),
      }).required(),
      localGuardian: Joi.object({
        name: Joi.string().required(),
        occupation: Joi.string().required(),
        contactNo: Joi.string().required(),
        address: Joi.string().required(),
      }).required(),
      profileImg: Joi.string().uri().optional(),
      isActive: Joi.string().valid('active', 'block').default('active'),
    });

    const { student: StudentData } = req.body;

    const { error, value } = studentSchema.validate(StudentData);
    console.log(error, value);

    const result = await StudentServices.createStudentIntoDB(StudentData);

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
    });
  }
};

const getAllStudens = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Student is retrived successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrived successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudens,
  getSingleStudent,
};
