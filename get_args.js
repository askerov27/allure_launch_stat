import chalk from "chalk";

const getArgs = () => {

    if (process.argv[2] < 2) {

        return;
    
    } else if (process.argv[2] === undefined) {

        return;

    } else if (process.argv[2] === null) {

        return;

    } else 
    
    console.log(chalk.green("test launch number:"), process.argv[2]);
    return process.argv[2];
  };


export { getArgs};

