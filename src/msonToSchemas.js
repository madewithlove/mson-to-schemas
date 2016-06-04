import eidolon from 'eidolon';
import protagonist from 'protagonist';

function getDataStructures(result) {
    let element, structures;
    do {
        element = result.element;
        structures = result.content;
        result = result.content[0];
    } while (element !== 'dataStructure');

    return structures;
}

export default function msonToSchemas(input, callback) {
    protagonist.parse(input, (errors, result) => {
        let schemas = {};
        getDataStructures(result).forEach(structure => {
            const schema = eidolon.schema(structure, {});
            const name = structure.meta.id;
            schema.title = name;

            schemas[name.toLowerCase()] = schema;
        });

        callback(schemas);
    });
}
