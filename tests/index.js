import fs from 'fs';
import expect from 'expect';
import msonToSchemas from '../src/msonToSchemas';

describe('msonToSchemas', () => {
    it(`can convert MSON to JSON schemas`, (done) => {
        const inputPath = `${__dirname}/input.apib`;

        // Get expected input and output
        const input = fs.readFileSync(inputPath).toString();

        msonToSchemas(input, output => {
            Object.keys(output).forEach(key => {
                const outputPath = `${__dirname}/output/${key}.json`;
                const expected = require(outputPath);

                expect(output[key]).toEqual(expected);
            });

            done();
        });
    });
});
