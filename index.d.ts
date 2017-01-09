import feathers from 'feathers/client';
import restDep from 'feathers-rest/client';
import socketioDep from 'feathers-socketio/client';
import primusDep from 'feathers-primus/client';
import hooksDep from 'feathers-hooks';
import authenticationDep from 'feathers-authentication-client';

export default e;

declare function e(): feathers.Application;
declare namespace e{
  const rest: typeof restDep;
  const socketio: typeof socketioDep;
  const primus: typeof primusDep;
  const hooks: typeof hooksDep;
  const authentication: typeof authenticationDep;
}