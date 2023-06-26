import { getUsername } from './getUsername.js';
import { getPath } from "./getPath.js";
import { up } from './NWD/up.js';
import {cd} from "./NWD/cd.js";

const {stdin, stdout, cwd} = process;

const manager = async () => {
    const username = getUsername();
    let path = getPath();
    stdout.write(`Welcome to the File Manager, ${username}!\nYou are currently in ${path}\n`);

    stdin.on('data', async (data) => {
        let argument = data.toString().trim();
        let option;
        console.log(argument);
        if (argument[0] === 'c' && argument[1] === 'd') {
            option = argument.slice(2, argument.length);
        }
        if (path.split(path.sep).length <= 3) {
            argument = 'error';
        }
        if (argument === '.exit') {
            process.on('exit', () => {
                stdout.write(`\nThank you for using File Manager, ${username}, goodbye!`);
            });
        }


        if (argument === 'up') {
            path = up(path);
        } else if (argument === 'error') {
            stdout.write('Operation failed\n');
        } else if (argument === 'cd') {
            path = await cd(path, option.trim());
        }
        console.log(`You are currently in ${path}`);
    });

    process.on('exit', () => {
        stdout.write(`\nThank you for using File Manager, ${username}, goodbye!`)
    });
};

manager();
