const handler = {
  get(target, prop) {
    const method = target[prop];
    return function(...args) {
      console.log(`Performing "${prop}" method with following args ${JSON.stringify(args)}`);
      let result = method.apply(this, args);
      return result;
    };
  }
};

const withLog = target => new Proxy(target, handler);

export default withLog;
