import Validator from './Validator';


export default function (req, res) {
  const { body } = req;

  const { error } = Validator.post(body);

  if (error) {
    return res.status(400).send({ error });
  }

  return res.status(201).send();
};
