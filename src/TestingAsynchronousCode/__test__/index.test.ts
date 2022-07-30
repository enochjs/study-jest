// It's common in JavaScript for code to run asynchronously.
// When you have code that runs asynchronously, Jest needs to know when the code it is testing has completed,
//  before it can move on to another test. Jest has several ways to handle this.
// Be sure to return (or await) the promise - if you omit the return/await statement, your test will complete before the promise returned from fetchData resolves or rejects.
// If you expect a promise to be rejected, use the .catch method. Make sure to add expect.assertions to verify that a certain number of assertions are called. Otherwise, a fulfilled promise would not fail the test.
/**
 * Promises
 */
import { fetchCallback, fetchData } from '..'

//  [Return a promise] from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will fail.
test('the data is promise', () => {
  return fetchData('promise').then((data) => {
    expect(data).toBe('promise')
  })
})

/**
 * Async/Await
 */
test('the data is async await', async () => {
  const data = await fetchData('async await')
  expect(data).toBe('async await')
})
test('the fetch fails with an error', async () => {
  expect.assertions(1)
  try {
    await fetchData(1)
  } catch (e) {
    expect(e).toMatch('name must be string')
  }
})
/**
 * You can combine async and await with .resolves or .rejects.
 */
test('the data is peanut butter', async () => {
  await expect(fetchData('resolve')).resolves.toBe('resolve')
})

test('the fetch fails with an error', async () => {
  await expect(fetchData(1)).rejects.toMatch('name must be string')
})

test('the data is peanut butter', () => {
  return expect(fetchData('peanut butter')).resolves.toBe('peanut butter')
})

// If you expect a promise to be rejected, use the .catch method.
// Make sure to add expect.assertions to verify that a certain number of assertions are called. Otherwise, a fulfilled promise would not fail the test.
test('the fetch fails with an error', async () => {
  // if not assertions, a fulfilled promise would not fail the test
  // such as fetchData('string').catch((e) => expect(e).toMatch('name must be string'))
  expect.assertions(1)
  // const f = fetchData('string')
  return fetchData(1).catch((e) => expect(e).toMatch('name must be string'))
})

/**
 * Callbacks
 */

// By default, Jest tests complete once they reach the end of their execution.

test('the data is peanut butter', (done) => {
  function callback(error: string | null, data: any) {
    if (error) {
      expect(error).toBe('name must be string')
      done()
      return
    }
    try {
      expect(data).toBe('peanut butter')
      done()
    } catch (error) {
      done(error)
    }
  }
  fetchCallback('peanut butter')(callback)
  // fetchCallback(1)(callback)
})
