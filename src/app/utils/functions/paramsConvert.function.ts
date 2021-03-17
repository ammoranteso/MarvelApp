/**
 * Function to parse params
 * @param options type any allows to different kind of types
 * @returns Objects save
 */
export const paramsConvert = (options: { [key: string]: any }): { [key: string]: string } => {
  const arraySave: { [key: string]: string } = {};
  Object.keys(options).forEach(elemKey => {
    const elem = options[elemKey];
    arraySave[elemKey] = `${elem}`;
  });
  return arraySave;
};
