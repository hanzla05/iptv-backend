import Joi from 'joi';
import { validateRequest } from './validateRequest';

const userSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

router.post('/register', validateRequest(userSchema), registerUser);
