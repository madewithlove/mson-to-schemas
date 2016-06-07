import assert from 'assert';
import filterByKey from '../../src/helpers/filterByKey';

describe('filterByKey', () => {
    const object = {foo: 'bar', baz: 'qux'};

    it('can return object if no input', () => {
        const result = filterByKey(object);
        assert.deepEqual(object, result);
    });

    it('can filter an object by its keys', () => {
        const result = filterByKey(object, ['foo']);
        assert.deepEqual({foo: 'bar'}, result);
    });

    it('can ignore unexisting keys', () => {
        const result = filterByKey(object, ['foo', 'bar']);
        assert.deepEqual({foo: 'bar'}, result);
    });
});
