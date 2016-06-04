import fs from 'fs';

export default function getFileContents(file) {
    return fs.readFileSync(file).toString();
} 
