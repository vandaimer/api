import { list } from '../queries';


class Contact {
  static tableName = 'contact';

  static async listByPersonId(personId) {
    return list(Contact.tableName, { personId });
  }
}

export default Contact;
