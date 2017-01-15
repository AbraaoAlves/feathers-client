import core from 'feathers/client';
import restDep from 'feathers-rest/client';
import socketioDep from 'feathers-socketio/client';
import primusDep from 'feathers-primus/client';
import hooksDep from 'feathers-hooks';
import authenticationDep from 'feathers-authentication-client';

export as namespace feathers;
declare function e(): e.Application;

declare namespace e{
  export const rest: typeof restDep;
  export const socketio: typeof socketioDep;
  export const primus: typeof primusDep;
  export const hooks: typeof hooksDep;
  export const authentication: typeof authenticationDep;

  interface ServiceParams         extends core.Params{}
  interface FeathersUseHandler<T> extends core.FeathersUseHandler<T>{}
  interface Service<T>            extends core.Service<T>{}
  interface Application           extends core.Application{
    passport: authenticationDep.Passport;
    authenticate: (credentials?: authenticationDep.Credentials) => Promise<any>;
    logout: () => Promise<any>;
  }

  interface AuthConfig extends authenticationDep.Config {} 
}

export = e;