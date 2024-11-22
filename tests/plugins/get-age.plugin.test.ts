import { getAge } from '../../src/plugins';

describe('plugins/get-age.plugin.ts', () => { 
  
  
  test('should return the age', () => { 
    const birthdate = '1990-01-01';
    const age = getAge(birthdate);
    // expect(age).toBe(34); // This will fail in the future
    expect(typeof age).toBe('number');

  })

  test('should return current age', () => { 
    const birthdate = '1990-01-01';
    const age = getAge(birthdate);
    const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
    expect(age).toBe(calculatedAge); 
  })

  test('should throw an error if birthdate is not a valid date', () => {
    try {
      const birthdate = 'ASCII 24';
      getAge(birthdate);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }

  })
  
  test('should return current age (with spies)', () => { 
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2000);
    const age = getAge('anything');
    const calculatedAge = new Date().getFullYear() - 2000;

    expect(age).toBe(calculatedAge); 
    expect(spy).toHaveBeenCalled();
  })




})