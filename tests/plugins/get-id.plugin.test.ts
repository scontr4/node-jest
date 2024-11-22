import { getUUID } from '../../src/plugins/get-id.plugin';
describe('plugins/get-id.plugin.ts', () => { 
  
  test('getUUID should return an UUID', () => { 
    const uuid = getUUID();
    // expect(uuid).toMatch(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}/);
    expect(uuid.length).toBe(36);
    expect(typeof(uuid)).toBe('string');
  })

})