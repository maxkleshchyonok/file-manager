import {homedir} from 'os';

export const getPath = function () {
    return homedir().trim();
}
