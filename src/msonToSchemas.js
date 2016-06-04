import eidolon from 'eidolon';
import protagonist from 'protagonist';

function getDataStructures(result) {
    while (true) {
        if (result.content[0].element === 'dataStructure') {
            return result.content.map(entry => entry.content[0]);
        }

        result = result.content[0];
    }
}

export default function msonToSchemas(input, callback) {
    protagonist.parse(input, (errors, result) => {
        let schemas = {};
        getDataStructures(result).forEach(structure => {
            const schema = eidolon.schema(structure, {});

            // Append schema title
            const name = structure.meta.id;
            const slug = name.replace(' ', '-').toLowerCase();
            schema.title = name;

            schemas[slug] = schema;
        });

        callback(schemas);
    });
}
