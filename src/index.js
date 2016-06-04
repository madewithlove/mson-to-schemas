import path from 'path';
import program from 'commander';
import 'colors';
import packageInformations from '../package.json';
import msonToSchemas from './msonToSchemas';
import schemasToFiles from './schemasToFiles';
import {ensureDirectory, getFileContents} from './helpers';

program
    .version(packageInformations.version)
    .usage('<input> <output>');

program
    .command('* <input> <output>')
    .description('Convert an MSON file into JSON schemas')
    .action((file, output) => {
        output = path.resolve(output);
        ensureDirectory(output);

        const contents = getFileContents(file);
        msonToSchemas(contents).then(schemas => {
            schemasToFiles(output, schemas).forEach(file => {
                console.log('Created %s', file.green);
            });
        });
    });

program.parse(process.argv);
