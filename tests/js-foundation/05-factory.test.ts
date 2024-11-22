import { buildMakePerson } from '../../src/js-foundation/05-factory';


describe('js-foundation/05-factory.test.ts', () => { 

  // Manual mocks
  const getUUID = () => '1234'
  const getAge = () => 40
  
  // Easiest test -> the typeof the return
  test('buildMakePerson should return a function', () => { 
    const makePerson = buildMakePerson({getAge, getUUID});
    // expect(typeof(makePerson)).toBe('string'); // We can check comparing with what the console says
    expect(typeof(makePerson)).toBe('function');
  })

  test('buildMakePerson should return a person Builder', () => { 
    const makePerson = buildMakePerson({getAge, getUUID});  
    const johnnyTest = makePerson({name: 'Johnny Test', birthdate: '1994-11-22'})
    // console.log(johnnyTest)
    expect(johnnyTest).toEqual(
      { id: '1234', name: 'Johnny Test', birthdate: '1994-11-22', age: 40 }
    )
    // Why aren't we testing if the age is correct?...
  })

})