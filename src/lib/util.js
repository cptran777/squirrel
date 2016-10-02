// Contains the utility functions associated with usage of squirrel

const asArray = (input) => {
  return Array.isArray(input) ? input : [input];
};

export default {
  asArray
}