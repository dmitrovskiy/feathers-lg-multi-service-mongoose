import test from 'ava';
import { assert } from 'chai';
import fn from '../src/build-connection-url';

test('should properly build url with prefix and location group', () => {
  const url = 'mongodb://localhost';
  const prefix = 'testdb';
  const locationGroup = 'location1';

  const expected = `${url}/${prefix}-${locationGroup}`;
  const result = fn(url, prefix, locationGroup);
  assert.equal(result, expected);
});

test('should properly build url with only location group', () => {
  const url = 'mongodb://localhost/testdb';
  const locationGroup = 'location1';

  const expected = `${url}-${locationGroup}`;
  const result = fn(url, null, locationGroup);
  assert.equal(result, expected);
});

test('should properly build url with only prefix', () => {
  const url = 'mongodb://localhost';
  const prefix = 'testdb';

  const expected = `${url}/${prefix}`;
  const result = fn(url, prefix);
  assert.equal(result, expected);
});

test('should properly build url without prefix and location group', () => {
  const url = 'mongodb://localhost/testdb';

  const result = fn(url);
  assert.equal(result, url);
});
