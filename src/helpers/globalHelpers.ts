const logger = console;
//TODO drop the chalk here

const logError = (err: string | Error) => logger.error(err);
const logInfo = (info: string) => logger.info(info);
const logWarning = (warning: string) => logger.warn(warning);
const logObject = (msg: string, obj: any) => logger.log(msg, obj);

export { logError, logInfo, logWarning, logObject };
