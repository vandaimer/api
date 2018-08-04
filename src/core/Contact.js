import { list, createBatch } from '../queries';


class Contact {
  static tableName = 'contact';

  static async listByPersonId(personId) {
    return list(Contact.tableName, { personId });
  }

  static async saveBatch(personId, durtyContacts) {
    const contacts = durtyContacts.map(contact => ({ ...contact, personId }));
    await createBatch(Contact.tableName, contacts);
  }
}

export default Contact;
