export * from 'feathers/client';
import restDep from 'feathers-rest/client';
import socketioDep from 'feathers-socketio/client';
import primusDep from 'feathers-primus/client';
import hooksDep from 'feathers-hooks';
import authenticationDep from 'feathers-authentication-client';


export as namespace feathers;

declare type Application = feathers.Application;
declare type Service<T> = feathers.Service<T>;
declare type FeathersUseHandler<T> = feathers.FeathersUseHandler<T>;
declare type Params = feathers.Params;


declare namespace e{
  const rest: typeof restDep;
  const socketio: typeof socketioDep;
  const primus: typeof primusDep;
  const hooks: typeof hooksDep;
  const authentication: typeof authenticationDep;

  interface ServiceParams         extends feathers.Params{}
  interface FeathersUseHandler<T> extends feathers.FeathersUseHandler<T>{}
  interface Service<T>            extends feathers.Service<T>{}
  interface Application           extends feathers.Application{}
}