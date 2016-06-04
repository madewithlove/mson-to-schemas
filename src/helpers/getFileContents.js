import fs from 'fs';

export default function getFileContents(file) {
    if (!fs.existsSync(file)) {
        console.log('File "%s" does not exist'.red, file);

        return false;
    }

    return fs.readFileSync(file).toString();
}
