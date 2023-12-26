import chalk from "chalk";
import dedent from "dedent";
const printError = (error) => {
  console.log(chalk.bgRed("ERROR " + error));
  //return process.exit(1);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(" HELP ")}
              Без параметров - ошибка
              набор цифр из allure стоящий перед launch
              `
  );
};

const printLaunchData = (response) => {
  console.log(chalk.green("Launch №" + response.id) + ": " + response.name);
};

const printLauncProgressData = (response) => {
  console.log(
    dedent`
        ${chalk.green(response[0].status)}:${response[0].count} 
        ${chalk.green(response[1].status)}:${response[1].count} 
        ${chalk.green(response[2].status)}:${response[2].count} 
      `
  );
};

const printFailedTestCases = (response) => {
  let filterByFailedStatus = response.content.filter(
    (item) => item.status === "failed" || item.status === "broken"
  );

  for (let i = 0; i < filterByFailedStatus.length; i++) {
    console.log("");
    console.log(
      dedent`
      ${chalk.green("test case id ")}- ${filterByFailedStatus[i].id} 
      ${chalk.green("test case name ")}- ${filterByFailedStatus[i].name}
      ${chalk.green("Status")} - ${filterByFailedStatus[i].status}
      ${chalk.green("why test case failed")}:${filterByFailedStatus[i].message}`
    );
  }
};

export {
  printError,
  printLaunchData,
  printLauncProgressData,
  printFailedTestCases,
  printHelp,
};
