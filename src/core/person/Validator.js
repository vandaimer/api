import Joi from 'joi';


export default class Validator {
  static genericSchema() {
    return Joi.object().keys({
      name: Joi.string(),
      contacts: Joi.array().items(
        Joi.object().keys({
          service: Joi.string().required(),
          contact: Joi.string().required(),
        }).min(1),
      ).min(1),
    }).min(1);
  }

  static post (data) {
    const schema = Validator.genericSchema();
    return Validator.validate(schema, data);
  }

  static put (data) {
    const schema = Validator.genericSchema();
    return Validator.validate(schema, data);
  }

  static validate(schema, data) {
    return Joi.validate(data, schema, { stripUnknown: true });
  }
}
