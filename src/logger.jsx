import log from 'loglevel';

const originalFactory = log.methodFactory;

log.methodFactory = function (methodName, logLevel, loggerName) {
  const rawMethod = originalFactory(methodName, logLevel, loggerName);
  return function (...args) {
    const timestamp = new Date().toISOString();
    rawMethod(`[${timestamp}] [${methodName.toUpperCase()}]:`, ...args);
  };
};

log.setLevel(log.getLevel()); 

export default log;
