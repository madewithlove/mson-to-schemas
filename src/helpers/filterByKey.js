export default function filterByKey(object, keys) {
    if (!keys) {
        return object;
    }

    const filtered = {};
    Object.keys(object).forEach(key => {
        if (keys.includes(key)) {
            filtered[key] = object[key];
        }
    });

    return filtered;
}
