export default function getDataStructures(result) {
    while (
            !result.meta ||
            !result.meta.classes ||
            !result.meta.classes.includes('dataStructures')
    ) {
        result = result.content[0];
    }

    return result.content.map(entry => entry.content[0]);
}
