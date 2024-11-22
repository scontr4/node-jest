import { getUserById } from '../../src/js-foundation/04-arrow';

describe('js-foundation/03-callbacks.test.ts', () => { 

  test('should return error is user doesnt exist', (done) => {  // done here
    
    const id = 10;
    getUserById(10, (err, user) => {

      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();

      done();  // done is called to end the test
      
    })
    
  })

})