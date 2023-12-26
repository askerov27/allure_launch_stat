import {
  findLaunchById,
  getLaunchStat,
  getFailedTests,
} from "./services/api.services.js";
import { getArgs } from "./helpers/argrs.js";

const initCli = async () => {
  const args = getArgs();

  findLaunchById(args);
  getLaunchStat(args);
  getFailedTests(args);
};

initCli();
