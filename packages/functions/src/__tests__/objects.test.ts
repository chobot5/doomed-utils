import { describe, expect, it } from 'vitest'

import { objectEntries, objectKeys } from '../objects'

describe('Test objectEntries', () => {
  it('Should return an array of defined object entries', () => {
    expect(objectEntries({ a: 6, b: '55' })).toEqual([
      ['a', 6],
      ['b', '55'],
    ])
  })
})

describe('Test objectKeys', () => {
  it('Should return an array of defined object keys', () => {
    expect(objectKeys({ a: 6, b: '55' })).toEqual(['a', 'b'])
  })
})
