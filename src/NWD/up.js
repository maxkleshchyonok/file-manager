import path from 'path';

export const up = function (oldPath) {
    const newPath = oldPath.split(path.sep);
    newPath.pop();
    return newPath.join(path.sep);
};
