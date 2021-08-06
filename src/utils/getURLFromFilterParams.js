export const getURLFromFilterParams = (params) => {
  let result = '/';
  Object.entries(params).forEach(([field, value]) => {
    if (value !== '') {
      result = `${result}${field}=${value}&`
    }
  })
  if (result[result.length - 1 ] === '&' || result[result.length - 1 ] === '/') {
    return result.slice(0, -1)
  }
  return result;
}
