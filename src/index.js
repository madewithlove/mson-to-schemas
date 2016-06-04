import path from 'path';
import fs from 'fs';
import program from 'commander';
import 'colors';
import packageInformations from '../package.json';
import msonToSchemas from './msonToSchemas';
import schemasToFiles from './schemasToFiles';
import {ensureDirectory, getFileContents} from './helpers';

program.version(packageInformations.version);

program
    .command('convert <input> <output>')
    .alias('*')
    .description('Convert an MSON file into JSON schemas')
    .action((file, output) => {
        output = path.resolve(output);
        ensureDirectory(output);

        // Get file contents
        const contents = getFileContents(file);
        if (!contents) {
            return process.exit(1);
        }

        msonToSchemas(contents).then(schemas => {
            return schemasToFiles(output, schemas).forEach(schema => {
                console.log('Created %s', schema.green);
            });
        });
    });

program.parse(process.argv);
