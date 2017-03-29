export default function (url, prefix, locationGroup) {
  let connectionUrl = url;
  if (prefix) connectionUrl += '/' + prefix;
  if (locationGroup) connectionUrl += '-' + locationGroup;
  return connectionUrl;
}
