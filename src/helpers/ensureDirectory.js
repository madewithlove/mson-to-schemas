import fs from 'fs';

const DIRECTORY_NOT_FOUND = -2;

export default function ensureDirectory(path) {
    try {
        fs.statSync(path);
    } catch (error) {
        if (error.errno === DIRECTORY_NOT_FOUND) {
            console.log('%s does not exist, creating it', path.grey);
            fs.mkdir(path);
        }
    }
}
