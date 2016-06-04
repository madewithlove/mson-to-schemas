import fs from 'fs';
import expect from 'expect';
import msonToSchemas from '../src/msonToSchemas';

describe('msonToSchemas', () => {
    const files = fs.readdirSync(__dirname + '/input');

    files.forEach(file => {
        it(`can convert MSON to JSON schemas (${file})`, (done) => {
            const inputPath = `${__dirname}/input/${file}`;
            const outputPath = `${__dirname}/output/${file.replace('apib', 'json')}`;

            // Get expected input and output
            const input = fs.readFileSync(inputPath).toString();
            let expected = require(outputPath);

            msonToSchemas(input, output => {
                expect(output.album).toEqual(expected);
                done();
            });
        });
    });
});
