/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {

  const objToPick = {};

  for (let [key, val] of Object.entries(obj)) {
    if (fields.includes(key)) {
      objToPick[key] = val;
    }
  }

  return objToPick;

};
