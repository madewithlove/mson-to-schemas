export default function slugify(string) {
    // Convert camelCase to hyphen-case
    string = string.replace(/([a-z])([A-Z])/, (...matches) => {
        return `${matches[1]} ${matches[2].toLowerCase()}`;
    });

    return string.replace(' ', '-').toLowerCase();
}
