import fs from 'fs';

export default function ensureDirectory(path) {
    try {
        fs.statSync(path);
    } catch (error) {
        if (error.errno === -2) {
            console.log('%s does not exist, creating it', path.grey);
            fs.mkdir(path);
        }
    }
}
