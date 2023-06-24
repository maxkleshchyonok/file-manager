import { getUsername } from './getUsername.js';
const {stdin, stdout} = process;

const manager = async () => {
    const username = getUsername();
    stdout.write(`Welcome to the File Manager, ${username}!`);
};

manager();
