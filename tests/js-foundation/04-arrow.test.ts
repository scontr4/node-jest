import { getUserById } from '../../src/js-foundation/04-arrow';

describe('js-foundation/04-arrow.test.ts', () => { 

  test('should return error is user doesnt exist', (done) => {  // done here
    
    const id = 10;
    getUserById(id, (err, user) => {

      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();

      done();  // done is called to end the test
    })
    
  })

  test('should return correct user for id', () => { 
    const id = 1;
    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();

      // ** To Be doesn't work with objects
      // expect(user).toBe({
      //   id: 1,
      //   name: 'John Doe',
      // })
      expect(user).toStrictEqual({
        id: 1,
        name: 'John Doe',
      })

      // ** Evaluating properties using toBe
      // expect(user!.id).toBe(1);
      // expect(user!.name).toBe('John Doe');
    })
  })

})