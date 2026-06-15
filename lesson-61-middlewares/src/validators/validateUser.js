import Joi from 'joi';

const userRegistrationSchema = Joi.object({
  name: Joi.string().max(255).required(),
  email: Joi.string().email().required()
}).required();

export const validateUser = (req, res, next) => {
  const { error } = userRegistrationSchema.validate(req.body, { abortEarly: false });

  console.dir(error, {depth: null})
  if(error) {
    const message = error.details.map(d => d.message).join(', ');
    return res.status(400).send({message});
  }

  next();
}