import { getUsername } from './getUsername.js';
import { getPath } from "./getPath.js";
import { up } from './NWD/up.js';

const {stdin, stdout, cwd} = process;

const manager = async () => {
    const username = getUsername();
    let path = getPath();
    stdout.write(`Welcome to the File Manager, ${username}!\nYou are currently in ${path}\n`);

    stdin.on('data', async (data) => {
        let argument = data.toString().trim();
        if (path.split(path.sep).length <= 3) {
            argument = 'error';
        }

        if (argument === 'up') {
            path = up(path);
        } else if (argument === 'error') {
            stdout.write('Operation failed\n');
        }
        console.log(`You are currently in ${path}`);
    });

    process.on('exit', () => {
        stdout.write(`\nThank you for using File Manager, ${username}, goodbye!`)
    });
};

manager();
