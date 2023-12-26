import axios from "axios";

import chalk from "chalk";
import { printError } from "../services/log.services.js";

const findLaunchById = async (id) => {
  const { data } = await axios.request({
    headers: {
      Accept: "application/json",
      Authorization: "Api-Token ddd461b2-ab60-435d-8f82-26f0ca2ca2ca",
    },
    method: "GET",
    url: `https://rallyup.testops.cloud/api/rs/launch/${id}`,
  });
  return data;
};

const getLaunchStat = async (id) => {
  const { data } = await axios.request({
    headers: {
      Accept: "application/json",
      Authorization: "Api-Token ddd461b2-ab60-435d-8f82-26f0ca2ca2ca",
    },
    method: "GET",
    url: `https://rallyup.testops.cloud/api/rs/launch/${id}/statistic`,
  });
  return data;
};

const getFailedTests = async (id) => {
  const { data } = await axios.request({
    headers: {
      Accept: "application/json",
      Authorization: "Api-Token ddd461b2-ab60-435d-8f82-26f0ca2ca2ca",
    },
    method: "GET",
    url: `https://rallyup.testops.cloud/api/rs/testresult?launchId=${id}&size=100`,
  });
  return data;
};

export { findLaunchById, getLaunchStat, getFailedTests };
