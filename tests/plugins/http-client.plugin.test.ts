import { httpClientPlugin } from '../../src/plugins/http-client.plugin';




describe('plugins/get-id.plugin.ts', () => { 
  
  test('get method should return a string', async() => { 
    
    const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');
    expect(data).toEqual({
      completed: expect.any(Boolean), 
      id: 1, 
      title: expect.any(String), 
      userId: 1
    }
    )
  })

  test('post, put and delete methods should be functions', () => {
    expect(httpClientPlugin.post).toBeInstanceOf(Function);
    expect(typeof httpClientPlugin.put).toBe('function');
    expect(httpClientPlugin.delete).toBeInstanceOf(Function);
  })

})