export default function getDataStructures(result) {
    while (true) {
        if (!result.content) {
            return [];
        }

        if (result.content[0].element === 'dataStructure') {
            return result.content.map(entry => entry.content[0]);
        }

        result = result.content[0];
    }
}
