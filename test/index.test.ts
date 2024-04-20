import { describe, expect, it } from 'vitest'
import { sum } from '../src'

describe('test', () => {
  it('sum should return 2', () => {
    expect(sum(1, 1)).toBe(2)
  })

  it('sum should return 4', () => {
    expect(sum(2, 2)).toBe(4)
  })
})
