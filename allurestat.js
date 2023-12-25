import { getLaunchStat, getFailedTests } from "./api_methods.js";
import { getArgs } from "./get_args.js";

const initCli = () => {
  const args = getArgs();
  getLaunchStat(args);
  getFailedTests(args);
};

initCli();
