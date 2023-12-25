import axios from "axios";
import chalk from "chalk";

const nodePath = process.argv[0];
const appPath = process.argv[1];
const id = process.argv[2];

console.log("nodePath:", nodePath);
console.log("appPath:", appPath);
console.log();
console.log(chalk.green("test launch number:"), id);
const getArgs = () => {
  return process.argv.slice(2);
};

function getLaunchStat(id) {
  axios
    .request({
      headers: {
        Accept: "application/json",
        Authorization: "Api-Token ddd461b2-ab60-435d-8f82-26f0ca2ca2ca",
      },
      method: "GET",
      url: `https://rallyup.testops.cloud/api/rs/launch/${id}/statistic`,
    })
    .then((response) => {
      console.log(
        chalk.green(response.data[0].status) + ": " + response.data[0].count
      );
      console.log(
        chalk.green(response.data[1].status) + ": " + response.data[1].count
      );
      console.log(
        chalk.green(response.data[2].status) + ": " + response.data[2].count
      );
    });

  axios
    .request({
      headers: {
        Accept: "application/json",
        Authorization: "Api-Token ddd461b2-ab60-435d-8f82-26f0ca2ca2ca",
      },
      method: "GET",
      url: `https://rallyup.testops.cloud/api/rs/launch/${id}`,
    })
    .then((response) => {
      console.log(
        chalk.green("Launch №" + response.data.id) + ": " + response.data.name
      );
    });
}

function getFailedTests(id) {
  axios
    .request({
      headers: {
        Accept: "application/json",
        Authorization: "Api-Token ddd461b2-ab60-435d-8f82-26f0ca2ca2ca",
      },
      method: "GET",
      url: `https://rallyup.testops.cloud/api/rs/testresult?launchId=${id}`,
    })

    .then((response) => {
      let arrObj = response.data.content;

      let arrObjNew = arrObj.filter((a) => a.status.includes("failed"));

      for (let i = 0; i < arrObjNew.length; i++) {
        console.log("\n" + chalk.green("Test ID") + ": " + arrObjNew[i].id);
        console.log(chalk.green("Test name") + ": " + arrObjNew[i].name);
        console.log(chalk.green("Status") + ": " + arrObjNew[i].status);
        console.log(
          chalk.green("Message") + ": " + arrObjNew[i].message + "\n"
        );
      }
    });
}

const initCli = () => {
  const args = getArgs();
  getLaunchStat(args);
  getFailedTests(args);
};

initCli();
