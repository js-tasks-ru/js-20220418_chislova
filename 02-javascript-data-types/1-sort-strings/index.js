/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

  let array = arr.slice();
  const elementsFlow = {
    asc: 1,
    desc: -1,
  }

  return array.sort( function(a,b){
    return elementsFlow[param] * a.localeCompare(b, ['ru-RU', 'en-EN'], {caseFirst:'upper'})
  })

}

