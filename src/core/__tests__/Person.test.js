import Person from '../Person';
import Contact from '../Contact';
import { PersonValidator } from '../../validators';
import { list, create, remove, update } from '../../queries';

jest.mock('../../queries');
jest.mock('../../validators');
jest.mock('../Contact');

describe('core.Person', () => {
  const id = 1;
  const name = '';
  const contacts = [{ service: 'twitter', contact: '@@' }];
  const person = { id, name: '', contacts };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should throw error if post payload is invalid', async () => {
    const error = 'An Error';
    PersonValidator.post.mockReturnValueOnce({
      error,
      value: '',
    });
    const req = { body: {} };
    await expect(Person.create(req)).rejects.toThrowError(error);
  });

  it('should return the new person created', async () => {
    PersonValidator.post.mockReturnValueOnce({
      error: undefined,
      value: '',
    });

    create.mockReturnValueOnce({
      id,
      name,
    });

    const req = { body: { name: '' } };
    const created = await Person.create(req);

    expect(created).toEqual({ created: { name, id } });
  });

  it('should the list of person', async () => {
    list.mockReturnValueOnce([person]);
    Contact.listByPersonId.mockReturnValueOnce(contacts);

    const personList = await Person.list();

    expect(personList).toEqual([{ ...person, contacts }]);
  });

  it('should remove a person', async () => {
    await Person.remove({ params: { id } });

    expect(remove).toBeCalledWith(Person.tableName, id);
  });

  it('should update a person', async () => {
    PersonValidator.put.mockReturnValueOnce({
      error: undefined,
      value: { name },
    });
    const req = { body: { name }, params: { id } };
    await Person.update(req);

    expect(update).toBeCalledWith(Person.tableName, id, { name });
  });

  it('should throw error if put payload is invalid', async () => {
    const error = 'An Error';
    PersonValidator.put.mockReturnValueOnce({
      error,
      value: '',
    });
    const req = { body: {}, params: { id } };
    await expect(Person.update(req)).rejects.toThrowError(error);
  });
});
