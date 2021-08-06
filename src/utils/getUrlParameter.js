export const getUrlParameter = (name, search) => {
  const params = new URLSearchParams(search);
  return params.get(name);
};
