import eidolon from 'eidolon';
import protagonist from 'protagonist';
import {getDataStructures, slugify} from './helpers';

export default function msonToSchemas(input) {
    return new Promise(resolve => {
        protagonist.parse(input, (errors, result) => {
            const foundStructures = getDataStructures(result);

            // Do a first pass to gather all data structures
            const dataStructures = {};
            foundStructures.forEach(structure => {
                dataStructures[structure.meta.id] = structure;
            });

            // Then convert all to JSON schemas
            const schemas = {};
            foundStructures.forEach(structure => {
                let schema = eidolon.schema(structure, dataStructures);

                // Add title and reorder properties
                schema = {
                    $schema: schema.$schema,
                    title: structure.meta.id,
                    description: schema.description,
                    ...schema,
                };

                // Trim some ends
                if (schema.description) {
                    schema.description = schema.description.trim();
                }

                const slug = slugify(schema.title);
                schemas[slug] = schema;
            });

            resolve(schemas);
        });
    });
}
