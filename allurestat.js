import {
  findLaunchById,
  getLaunchStat,
  getFailedTests,
} from "./api_methods.js";
import { getArgs } from "./get_args.js";

const initCli = async () => {
  const args = getArgs();

  findLaunchById(args);
  getLaunchStat(args);
  getFailedTests(args);
};

initCli();
