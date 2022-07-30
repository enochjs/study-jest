/**
 * Common Matchers
 */
test('two plus tow is four', () => {
  // toBe uses Object.is to test exact equality.
  expect(2 + 2).toBe(4)
})

// If you want to check the value of an object, use toEqual instead:
test('object assignment', () => {
  const data: Record<string, number> = { one: 1 }
  data.two = 2
  expect(data).toEqual({ one: 1, two: 2 })
})

/**
 * Truthiness
 */
//  toBeNull matches only null
//  toBeUndefined matches only undefined
//  toBeDefined is the opposite of toBeUndefined
//  toBeTruthy matches anything that an if statement treats as true
//  toBeFalsy matches anything that an if statement treats as false

test('null', () => {
  const n = null
  expect(n).toBeNull()
})

test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).not.toBeUndefined()
  expect(z).toBeDefined()
  expect(z).not.toBeTruthy()
  expect('e').toBeTruthy()
  expect(z).toBeFalsy()
  expect('e').not.toBeFalsy()
})

/**
 * Numbers
 */
test('two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

// For floating point equality, use toBeCloseTo instead of toEqual, because you don't want a test to depend on a tiny rounding error.

test('adding floating point numbers', () => {
  const value = 1000.1 + 1000.2
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(2000.3) // This works.
})

/**
 * Strings
 */
//  You can check strings against regular expressions with toMatch
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})

/**
 * Arrays and iterables
 */
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
]

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk')
  expect(new Set(shoppingList)).toContain('milk')
})

/**
 * Exceptions
 */

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK')
}
//  If you want to test whether a particular function throws an error when it's called, use toThrow.
test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow()
  expect(() => compileAndroidCode()).toThrow(Error)

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK')
  expect(() => compileAndroidCode()).toThrow(/JDK/)
})
