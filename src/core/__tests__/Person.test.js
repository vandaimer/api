import Person from '../Person';
import Contact from '../Contact';
import { PersonValidator } from '../../validators';
import { list, create, remove } from '../../queries';

jest.mock('../../queries');
jest.mock('../../validators');
jest.mock('../Contact');

describe('core.Person', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should throw error if payload is invalid', async () => {
    const error = 'An Error';
    PersonValidator.post.mockReturnValueOnce({
      error,
      value: '',
    });
    const req = { body: {} };
    await expect(Person.create(req)).rejects.toThrowError(error);
  });

  it('should return the new person created', async () => {
    const id = 1;
    const name = '';
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
    const contacts = [{ service: 'twitter', contact: '@@' }];
    const person = { id: 1, name: '', contacts };

    list.mockReturnValueOnce([person]);
    Contact.listByPersonId.mockReturnValueOnce(contacts);

    const personList = await Person.list();

    expect(personList).toEqual([{ ...person, contacts }]);
  });

  it('should remove a person', async () => {
    const id = 1;
    await Person.remove({ params: { id } });

    expect(remove).toBeCalledWith(Person.tableName, id);
  });
});
