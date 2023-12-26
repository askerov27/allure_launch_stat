import chalk from "chalk";

const printError = (error) => {
  console.log(chalk.bgRed("ERROR " + error));
  return process.exit(1);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(" HELP ")}
              Без параметров - ошибка
              набор цифр из allure стоящий перед launch
              `
  );
};

export { printError, printHelp };
