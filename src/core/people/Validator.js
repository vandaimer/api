import Joi from 'joi';


export default class Validator {
  static post (data) {
    const schema = Joi.object().keys({
      name: Joi.string(),
    }).min(1);
    return Validator.validate(schema, data);
  }

  static validate(schema, data) {
    return Joi.validate(data, schema, { stripUnknown: true });
  }
}
