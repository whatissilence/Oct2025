import { compareObjects } from './compare.js';

describe('compareObjects function', () => {

  it('returns true if objects are equal', () => {
    const person = { name: 'Some name', age: 20, gender: 'male' };
    const person2 = { name: 'Some name', age: 20, gender: 'male' };

    expect(compareObjects(person, person2)).toEqual(true);
  })

  it('returns true if objects are equal but keys order different', () => {
    const person = { name: 'Some name', gender: 'male', age: 20 };
    const person2 = { name: 'Some name', age: 20, gender: 'male' };

    expect(compareObjects(person, person2)).toEqual(true);
  })

  it('returns false if second has one more key', () => {
    const person =  { name: 'Some name', age: 20, gender: 'male' };
    const person2 = { name: 'Some name', age: 20, gender: 'male', height: 173 };

    expect(compareObjects(person, person2)).toEqual(false);
  })

  it('returns false if second has one key less', () => {
    const person =  { name: 'Some name', age: 20, gender: 'male' };
    const person2 = { name: 'Some name', age: 20 };

    expect(compareObjects(person, person2)).toEqual(false);
  })

  it('returns false if value is different', () => {
    const person = { name: 'Some name', age: 20, gender: 'male' };
    const person2 = { name: 'AAAAAAAA', age: 20, gender: 'male' };

    expect(compareObjects(person, person2)).toEqual(false);
  })

  it('returns false if key is different', () => {
    const person = { name: 'Some name', age: 20, gender: 'male' };
    const person2 = { name2: 'Some name', age: 20, gender: 'male' };

    expect(compareObjects(person, person2)).toEqual(false);
  })

  it('returns false if value type is different', () => {
    const person = { name: 'Some name', age: 20, gender: 'male' };
    const person2 = { name: 'Some name', age: '20', gender: 'male' };

    expect(compareObjects(person, person2)).toEqual(false);
  })

  it('returns true if string values has different case', () => {
    const person = { name: 'Some name', age: 20, gender: 'male' };
    const person2 = { name: 'Some name', age: 20, gender: 'male' };

    expect(compareObjects(person, person2)).toEqual(true);
  })

})