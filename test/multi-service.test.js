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

test('should return a dbUrl and dbPrefix from config', () => {
  const config = { dbUrl: 'mongodb://localhost', dbPrefix: 'some' };
  const options = {
    app: {
      get(key) {
        return config[key];
      }
    },
    collectionName: 'test',
    schema: {}
  };

  const result = service(options);
  assert.equal(result.dbUrl, config.dbUrl);
  assert.equal(result.dbPrefix, config.dbPrefix);
});

test('should return a dbUrl and dbPrefix from options', () => {
  const options = {
    app: { },
    collectionName: 'test',
    schema: {},
    dbUrl: 'mongodb://localhost',
    dbPrefix: 'some'
  };

  const result = service(options);
  assert.equal(result.dbUrl, options.dbUrl);
  assert.equal(result.dbPrefix, options.dbPrefix);
});
