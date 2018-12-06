const handler = {
  get: (target, prop) => (...args) => {
    console.log(`Performing "${prop}" method with following args ${JSON.stringify(args)}`);
    return target[prop](...args);
  }
};

const withLog = target => new Proxy(target, handler);

export default withLog;
