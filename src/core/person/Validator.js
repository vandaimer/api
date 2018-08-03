import Joi from 'joi';


export default class Validator {
  static genericSchema() {
    return Joi.object().keys({
      name: Joi.string(),
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
