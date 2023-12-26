import chalk from "chalk";

const printError = (error) => {
  console.log(chalk.bgRed("ERROR " + error));
  return process.exit(1);
};

const getArgs = () => {
  let argument = process.argv.slice(2);
  if (!argument.length) {
    printError("введен не правильный id, команда помощь -help");
  } else return process.argv.slice(2);
};

export { printError, getArgs };
