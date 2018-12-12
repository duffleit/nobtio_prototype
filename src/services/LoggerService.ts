const getLogStore = (): any[] => {
  const w = window as { nobtLogs?: [] };
  if (!w.nobtLogs) w.nobtLogs = [];
  return w.nobtLogs;
};

// Very simple logger, which stores log on the window object for debugging purposes.
export default {
  log(logObject: any) {
    const logStore = getLogStore();
    logStore.push({ log: logObject, dateTime: new Date().toISOString() });
  },
};
