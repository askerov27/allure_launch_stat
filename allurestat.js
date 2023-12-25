import { getArgs, getLaunchStat, getFailedTests } from "./api_methods.js";

const initCli = () => {
  const args = getArgs();
  getLaunchStat(args);
  getFailedTests(args);
};

initCli();
