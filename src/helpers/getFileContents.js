import fs from 'fs';

export default function getFileContents(file) {
    try {
        return fs.readFileSync(file).toString();
    } catch (error) {
        console.error('File "%s" does not exist'.red, file);
    }
}
