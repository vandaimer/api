import Person from '../Person';

describe('validators.Person', () => {
  it('should return a generic schema not undefined', () => {
    expect(Person.genericSchema()).not.toBeUndefined();
  });

  it('should validate the post request', () => {
    const post = { name: 'fake' };
    const { error } = Person.post(post);

    expect(error).toEqual(null);
  });

  it('should invalidate the post request', () => {
    const post = { lastName: 'fake' };
    const { error } = Person.post(post);

    expect(error).not.toEqual(null);
  });

  it('should invalidate the post request with empty contact list', () => {
    const post = { name: 'fake', contacts: [] };
    const { error } = Person.post(post);

    expect(error).not.toEqual(null);
  });

  it('should validate the put request', () => {
    const put = { name: 'fake' };
    const { error } = Person.put(put);

    expect(error).toEqual(null);
  });

  it('should invalidate the put request', () => {
    const put = { lastName: 'fake' };
    const { error } = Person.put(put);

    expect(error).not.toEqual(null);
  });

  it('should invalidate the put request with empty contact list', () => {
    const put = { name: 'fake', contacts: [] };
    const { error } = Person.put(put);

    expect(error).not.toEqual(null);
  });
});
