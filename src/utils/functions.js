export function makeQueryGraphQL(obj: Object) {
  let str = '';
  const array = Object.keys(obj);
  array.forEach((key, index) => {
    let value = obj[key];
    if (typeof value === 'object') {
      value = `{${makeQueryGraphQL(value)}}`;
    } else if (typeof value === 'string') {
      value = `"${value}"`;
    }
    const comma = array.length - 1 > index ? ',' : '';
    str += `${key}:${value}${comma}`;
  });
  return str;
}

export function makeParamsForResults(array: Object) {
  let str = '';
  if (Array.isArray(array)) {
    array.forEach(key => {
      let value = key;
      if (Array.isArray(key)) {
        value = `{${makeParamsForResults(key)}}`;
      }
      if (typeof key === 'object') {
        Object.keys(key).forEach(v => {
          value = `${v} { ${makeParamsForResults(key[v])} }`;
        });
      }
      str += `${value} `;
    });
  }
  return str;
}
