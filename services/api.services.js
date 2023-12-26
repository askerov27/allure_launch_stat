import axios from "axios";
import dedent from "dedent";
import chalk from "chalk";
import { printError } from "../services/log.services.js";

const findLaunchById = (id) => {
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
    })
    .catch((error) => {
      if (error.response && error.response.status === 400) {
        printError("введен не правильный id");
      } else if (error.response && error.response.status === 404) {
        printError("такой LAUNCH не найден");
      }
    });
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
        dedent`
        ${chalk.green(response.data[0].status)}:${response.data[0].count}
        ${chalk.green(response.data[1].status)}:${response.data[1].count}
        ${chalk.green(response.data[2].status)}:${response.data[2].count}
      `
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

export { findLaunchById, getLaunchStat, getFailedTests };
