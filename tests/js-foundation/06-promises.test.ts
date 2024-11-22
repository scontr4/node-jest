import { getPokemonById } from '../../src/js-foundation/06-promises';


describe('js-foundation/06-promises.ts', () => {
  
  test('should return a pokèmon', async() => { // We can use async in our tests
    const pokemonId = 1
    const pokemonName = await getPokemonById(pokemonId);
    expect(pokemonName).toBe('bulbasaur'); // What if bulbasaur stop being pokemon 1?

  })

  test('should return an error if pokemon doesnt exists', async() => { 
    const pokemonId = 100000000

    // How to evaluate an error response?
    try {
      await getPokemonById(pokemonId); // this function will throw an error
    } catch (error) {
      expect(error).toBe(`Pokemon not foung with id ${pokemonId}`)
    }

  })

})