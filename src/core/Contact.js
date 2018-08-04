import { list, createBatch, removeWhere } from '../queries';


class Contact {
  static tableName = 'contact';

  static async listByPersonId(personId) {
    return list(Contact.tableName, { personId });
  }

  static async saveBatch(personId, durtyContacts) {
    const contacts = durtyContacts.map(contact => ({ ...contact, personId }));
    return createBatch(Contact.tableName, contacts);
  }

  static async removeByPersonId(personId) {
    return removeWhere(Contact.tableName, { personId });
  }
}

export default Contact;
