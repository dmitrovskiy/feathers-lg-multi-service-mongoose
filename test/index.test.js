import test from 'ava';
import { assert } from 'chai';
import service from '../src/index';

test('should return locationGroupMiddleware and service', () => {
  assert.isDefined(service.locationGroupHeader);
  assert.isDefined(service.service);
});
