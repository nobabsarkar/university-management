const createStudent = async (req: Request, res: Response) => {
  try {
    // creating a schema validation using zod

    const { student: StudentData } = req.body;

    // data validation using Joi
    // const { error, value } = studentValidationSchema.validate(StudentData);

    // data validation using zod
    // const zodParseData = studentValidationSchema.parse(StudentData);

    const result = await StudentServices.createStudentIntoDB(zodParseData);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'someting went wrong',
    //     error: error.details,
    //   });
    // }

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};
