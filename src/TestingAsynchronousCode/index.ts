export const fetchData = (name: string | number) =>
  new Promise((resolve, reject) => {
    if (typeof name === 'number') {
      reject('name must be string')
    } else {
      resolve(name)
    }
  })

export const fetchCallback = (name: string | number) => (
  callback: (error: string | null, data?: any) => any,
) => {
  console.log('===typeof name', typeof name)
  if (typeof name === 'number') {
    callback('name must be string')
  } else {
    callback(null, name)
  }
}
