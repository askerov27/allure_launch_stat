import {
  findLaunchById,
  getLaunchStat,
  getFailedTests,
} from "./services/api.services.js";
import { getArgs } from "./helpers/argrs.js";
import {
  printError,
  printLaunchData,
  printLauncProgressData,
  printFailedTestCases,
} from "./services/log.services.js";

const launchName = async (args) => {
  try {
    const launchData = await findLaunchById(args);
    printLaunchData(launchData);
  } catch (error) {
    if (error.response && error.response.status === 400) {
      printError("введен не правильный id");
    } else if (error.response && error.response.status === 404) {
      printError("такой LAUNCH не найден");
    }
  }
};

const launchProgressData = async (args) => {
  const launchProgressData = await getLaunchStat(args);
  printLauncProgressData(launchProgressData);
};

const launchFailedTestCases = async (args) => {
  const failedTestCaseData = await getFailedTests(args);
  printFailedTestCases(failedTestCaseData);
};

const initCli = async () => {
  const args = getArgs();
  await launchName(args);
  await launchProgressData(args);
  await launchFailedTestCases(args);
};

initCli();
