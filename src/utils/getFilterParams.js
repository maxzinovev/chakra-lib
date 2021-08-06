export const getFilterParams = (filter = [], search) => {
  const params = new URLSearchParams(search);
  let result = {};
  filter.forEach(item => {
    const param = params.get(item);
    if (param) {
      result[item] = param
    }
  })
  return result;
};
