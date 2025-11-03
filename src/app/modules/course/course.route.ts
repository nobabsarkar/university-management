import express from 'express';
import { CourseControllers } from './course.controller';
import validateRequest from '../../middlewares/validateRequest';
import { CourseValidations } from './course.validation';

const router = express.Router();

router.post(
  '/create-course',
  validateRequest(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourse,
);

router.get('/:id', CourseControllers.getSinglecourse);

router.get('/', CourseControllers.getAllcourses);

router.delete('/', CourseControllers.deleteCourse);

export const CourseRoutes = router;
