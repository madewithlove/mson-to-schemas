import eidolon from 'eidolon';
import protagonist from 'protagonist';

function getDataStructures(result) {
    let element;

    // Unwrap contents of file
    do {
        element = result.element;
        result = result.content[0];
    } while (element !== 'dataStructure');

    return result;
}

export default function msonToSchema(input, callback) {
    protagonist.parse(input, (errors, result) => {
        const structures = getDataStructures(result);

        const schema = eidolon.schema(structures, {});
        schema.title = structures.meta.id;

        callback(schema);
    });
}
