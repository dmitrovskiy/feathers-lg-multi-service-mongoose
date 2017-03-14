import service from 'feathers-multi-service';
import getService from './service-proxy';

export default ({
  app = null,
  collectionName = null,
  schema = null
}) => {
  if (!app || !collectionName || !schema) {
    throw new Error(
      'Wrong multi service usage. Required schema, app, collectionName'
    );
  }

  const dbUrl = app.get('dbUrl');
  const dbPrefix = app.get('dbPrefix');

  return service({
    collectionName,
    dbUrl,
    dbPrefix,
    schema,
    getService
  });
};
