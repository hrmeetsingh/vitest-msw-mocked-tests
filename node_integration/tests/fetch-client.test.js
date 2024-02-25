import { expect, test } from 'vitest'

test('Checks mocked fetch results', async () => {
    const response = await fetch('https://api.example.com/user')

    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(await response.json()).toEqual({
      firstName: 'John',
      lastName: 'Galt',
    })
})