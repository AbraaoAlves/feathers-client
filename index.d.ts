import feathers from 'feathers/client';
import restDep from 'feathers-rest/client';
import socketioDep from 'feathers-socketio/client';
import primusDep from 'feathers-primus/client';
import hooksDep from 'feathers-hooks';
import authenticationDep from 'feathers-authentication-client';

export as namespace feathers;

export default e;
 
declare function e(): e.Application;

declare namespace e{
  const rest: typeof restDep;
  const socketio: typeof socketioDep;
  const primus: typeof primusDep;
  const hooks: typeof hooksDep;
  const authentication: typeof authenticationDep;

  interface ServiceParams         extends feathers.Params{}
  interface FeathersUseHandler<T> extends feathers.FeathersUseHandler<T>{}
  interface Service<T>            extends feathers.Service<T>{}
  interface Application           extends feathers.Application{
    passport: authenticationDep.Passport;
    authenticate: (credentials?: authenticationDep.Credentials) => Promise<any>;
    logout: () => Promise<any>;
  }

  interface AuthConfig extends authenticationDep.Config {} 
}