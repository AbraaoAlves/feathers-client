import * as core from 'feathers/client';
import * as restDep from 'feathers-rest/client';
import * as socketioDep from 'feathers-socketio/client';
import * as primusDep from 'feathers-primus/client';
import * as hooksDep from 'feathers-hooks';
import * as authenticationDep from 'feathers-authentication-client';

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