import fs from 'fs';
import path from 'path';

export default function schemasToFiles(directory, schemas) {
    return Object.keys(schemas).map(key => {
        const contents = JSON.stringify(schemas[key], null, 4);
        const outputPath = path.join(directory, `${key}.json`);

        fs.writeFile(outputPath, contents);

        return outputPath;
    });
}
