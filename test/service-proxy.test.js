import test from 'ava';
import { assert } from 'chai';
import randomstring from 'randomstring';
import { Schema } from 'mongoose';
import feathers from 'feathers';
import multiService from '../src/multi-service';

const app = feathers();
const locationGroup = randomstring.generate();
const service = multiService({
  app,
  collectionName: 'test123',
  schema: new Schema({
    test: 'String'
  })
});

test('should throw an error due to locationGroup nonexistence', () => {
  assert.throws(service.getService.bind(service));
});

test('should return a service', () => {
  assert.isObject(service.getService({ locationGroup }));
});

