export const checkParam = (param) => {
  return param ? param.replace(/^\s*/,'').replace(/\s*$/,'') : undefined
};
