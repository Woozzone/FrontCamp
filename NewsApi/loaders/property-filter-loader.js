const validateProp = prop => {
  if (Array.isArray(prop)) {
    iterateArray(prop);
  } else if (typeof prop === 'object') {
    iterateObj(prop);
  }
}

const iterateObj = obj => {
  for (let key in obj) {
    validateProp(obj[key]);

    if (key.match(/^[0-9]*$/)) {
      delete obj[key];
    }
  }
}

const iterateArray = arr => {
  for (let key in arr) {
    validateProp(arr[key]);
  }
}


module.exports = source => {
  iterateArray(source);

  return `module.exports = ${JSON.stringify(source)}`;
}