import Contact from '../Contact';
import { list, createBatch, removeWhere } from '../../queries';

jest.mock('../../queries');

describe('core.Contact', () => {
  it('should call listByPersonId', async () => {
    const personId = 1;
    await Contact.listByPersonId(personId);

    expect(list).toBeCalledWith(Contact.tableName, { personId });
  });

  it('should call saveBatch', async () => {
    const personId = 1;
    const contact = { data: 'mocked' };
    const contacts = [ contact ];
    await Contact.saveBatch(personId, contacts);
    const expected = [ { ...contact, personId } ];

    expect(createBatch).toBeCalledWith(Contact.tableName, expected);
  });

  it('should call removeByPersonId', async () => {
    const personId = 1;
    await Contact.removeByPersonId(personId);

    expect(removeWhere).toBeCalledWith(Contact.tableName, { personId });
  });
});
