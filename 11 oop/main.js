import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue.bold("\tproject 11 oop"));
class Student {
    constructor(n) {
        this.name = n;
    }
}
class person {
    constructor() {
        this.student = [];
    }
    addstudent(obj) {
        this.student.push(obj);
    }
}
const Person = new person();
let programmstart = async (Person) => {
    console.log(chalk.yellow.bold('\tWelcom guest'));
    const game = await inquirer.prompt([
        {
            type: 'input',
            name: 'your',
            message: 'please enter your name'
        },
        {
            type: "input",
            name: "sclass",
            message: "please enter student name",
        }
    ]);
    const { sclass, your } = game;
    if (game.your) {
        console.log((chalk.bold.yellow(your)), ' call the ', (chalk.bold.blue(sclass)));
    }
    else {
        console.log('please enter valid name');
    }
    if (game.sclass, game.your) {
        console.log(`Assalam o alikum ${your}`);
    }
    else {
        console.log('please enter valid name');
    }
    do {
        let main = await inquirer.prompt([
            {
                type: "list",
                name: 'mess',
                choices: [`ap kise ha  ${sclass}`, `walikum Assalam ${sclass}`, `alhamdulillah ma thik ho`],
                message: 'please select your message'
            },
        ]);
        if (main.mess == `alhamdulillah ma thik ho`) {
            console.log(`ok ${your} byyy`);
            process.exit();
        }
        else if (main.mess == `ap kise ha  ${sclass}`) {
            console.log(`ma thik ho ${your} ap snaiii`);
        }
        else if (main.mess == `walikum Assalam ${sclass}`) {
            console.log(`Or snaii ${your}`);
        }
    } while (true);
};
programmstart(Person);
// const{game.sclass}=programmstart
