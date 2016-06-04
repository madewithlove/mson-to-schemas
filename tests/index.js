import fs from 'fs';
import path from 'path';
import assert from 'assert';
import msonToSchemas from '../src/msonToSchemas';

describe('msonToSchemas', () => {
    const files = fs.readdirSync(path.resolve('tests/output'));
    const inputPath = `${__dirname}/input.apib`;
    const input = fs.readFileSync(inputPath).toString();
    const schemas = msonToSchemas(input);

    files.forEach(file => {
        it(`can convert MSON to JSON schemas - ${file}`, () => {
            return schemas.then(output => {
                const actual = output[file.replace('.json', '')];
                const expected = require(path.resolve(`tests/output/${file}`));

                assert.deepEqual(actual, expected);
            });
        });
    });
});
