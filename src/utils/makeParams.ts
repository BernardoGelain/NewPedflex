export const makeParams = (options?: Record<string, any>) => {
  if (!options) return "";

  let params = "?";
  const array = Object.keys(options);
  array.map((it, i) => {
    params += `${it}=${options[it]}`;

    params += i !== array.length - 1 ? "&" : "";
  });

  return params;
};
