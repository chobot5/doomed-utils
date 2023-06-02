import { describe, expect, it } from 'vitest'
import objectKeys from '../objectKeys'

describe('Test objectKeys', () => {
  it('Should return an array of defined object keys', () => {
    expect(objectKeys({ a: 6, b: '55' })).toEqual(['a', 'b'])
  })
})
