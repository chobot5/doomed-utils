import { describe, expect, it } from 'vitest'
import objectEntries from '../objectEntries'

describe('Test objectEntries', () => {
  it('Should return an array of defined object entries', () => {
    expect(objectEntries({ a: 6, b: '55' })).toEqual([
      ['a', 6],
      ['b', '55'],
    ])
  })
})
