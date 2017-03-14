import test from 'ava';
import { assert } from 'chai';
import service from '../src/multi-service';

test('should throw an error of nonexistent app', () => {
  assert.throws(() => {
    service({ collectionName: 'test', schema: { } });
  });
});

test('should throw an error of nonexistent collectionName', () => {
  assert.throws(() => {
    service({ app: { }, schema: { } });
  });
});

test('should throw an error on nonexistent schema', () => {
  assert.throws(() => {
    service({ app: { }, collectionName: 'test' });
  });
});

test('should return a multi-service instance', () => {
  const options = {
    app: {
      get: () => 'test'
    },
    collectionName: 'test',
    schema: {}
  };

  assert.isObject(service(options));
});
