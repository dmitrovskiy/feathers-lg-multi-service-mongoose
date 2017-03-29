import mongoose from 'mongoose';
import service from 'feathers-mongoose';
import Promise from 'bluebird';
import buildConnectionUrl from './build-connection-url';

mongoose.Promise = Promise;

const services = {};

export default function (params) {
  const locationGroup = params.locationGroup;
  const connectionUrl = buildConnectionUrl(this.dbUrl, this.dbPrefix, locationGroup);
  const serviceName = `${connectionUrl}/${this.collectionName}`;

  if (!services[serviceName]) {
    // setting up a db connection
    const connection = mongoose.createConnection(connectionUrl);
    // creating a model
    const model = connection.model(this.collectionName, this.schema);
    // creating a service
    services[serviceName] = service({ Model: model });
  }

  return services[serviceName];
}
