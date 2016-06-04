import fs from 'fs';
import path from 'path';
import program from 'commander';
import 'colors';
import packageInformations from '../package.json';
import msonToSchemas from './msonToSchemas';
import schemasToFiles from './schemasToFiles';

program
    .version(packageInformations.version)
    .usage('<input> <output>');

program
    .command('* [input] [output]')
    .action((file, output) => {
        // Ensure directory exists
        output = path.resolve(output);
        try {
            fs.statSync(output);
        } catch (error) {
            if (error.errno === -2) {
                console.log('%s does not exist, creating it', output.grey);
                fs.mkdir(output);
            }
        }

        const contents = fs.readFileSync(file).toString();
        msonToSchemas(contents, schemas => {
            schemasToFiles(output, schemas).forEach(file => {
                console.log('Created %s', file.green);
            });
        });
    });

program.parse(process.argv);
