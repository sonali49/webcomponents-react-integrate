export const convertKmToNum = (value) =>
  parseFloat(value.split(" km")[0].replace(",", "."));
