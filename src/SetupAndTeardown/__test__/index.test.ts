// Often while writing tests you have some setup work that needs to happen before tests run, and you have some finishing work that needs to happen after tests run.
// Jest provides helper functions to handle this.

/**
 * Repeating Setup
 */
// beforeEach(() => {
//   initializeCityDatabase()
// })

// afterEach(() => {
//   clearCityDatabase()
// })

// test('city database has Vienna', () => {
//   expect(isCity('Vienna')).toBeTruthy()
// })

// test('city database has San Juan', () => {
//   expect(isCity('San Juan')).toBeTruthy()
// })

/**
 * One-Time Setup
 */
//  beforeAll(() => {
//   return initializeCityDatabase();
// });

// afterAll(() => {
//   return clearCityDatabase();
// });

// test('city database has Vienna', () => {
//   expect(isCity('Vienna')).toBeTruthy();
// });

// test('city database has San Juan', () => {
//   expect(isCity('San Juan')).toBeTruthy();
// });

/**
 * Scoping
 */
//  You can also group tests together using a describe block. When they are inside a describe block, the beforeAll and afterAll blocks only apply to the tests within that describe block.
