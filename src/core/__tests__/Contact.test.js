import Contact from '../Contact';
import { list, createBatch, removeWhere } from '../../queries';

jest.mock('../../queries');

describe('core.Contact', () => {
  const personId = 1;
  const contact = { data: 'mocked' };
  const contacts = [contact];

  it('should call listByPersonId', async () => {
    await Contact.listByPersonId(personId);

    expect(list).toBeCalledWith(Contact.tableName, { personId });
  });

  it('should call saveBatch', async () => {
    await Contact.saveBatch(personId, contacts);
    const expected = [{ ...contact, personId }];

    expect(createBatch).toBeCalledWith(Contact.tableName, expected);
  });

  it('should call removeByPersonId', async () => {
    await Contact.removeByPersonId(personId);

    expect(removeWhere).toBeCalledWith(Contact.tableName, { personId });
  });

  it('should call saveBatch when call updateByPersonId', async () => {
    Contact.saveBatch = jest.fn();
    await Contact.updateByPersonId(personId, contacts);

    expect(Contact.saveBatch).toBeCalledWith(personId, contacts);
  });

  it('should call removeByPersonId when call updateByPersonId', async () => {
    Contact.removeByPersonId = jest.fn();
    await Contact.updateByPersonId(personId, contacts);

    expect(Contact.removeByPersonId).toBeCalledWith(personId);
  });
});
