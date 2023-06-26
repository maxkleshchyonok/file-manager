import path from "path";
import {up} from "./up.js";
import {access} from "fs/promises";
const {stdout} = process;

export const cd = async function (oldPath, newPath) {
    if (newPath === '..' || newPath === '/') {
        return up(oldPath);
    }
    let actualPath;
    if (newPath.length <= 2 && newPath[1] === ':') {
        actualPath = `${newPath}\\`;
    } else {
        if (path.isAbsolute(newPath)) {
            actualPath = newPath;
        } else {
            actualPath = path.join(oldPath, newPath);
        }
    }
    if (await access(actualPath)) {
        return actualPath;
    } else {
        stdout.write('Operation failed');
        return oldPath;
    }
}
