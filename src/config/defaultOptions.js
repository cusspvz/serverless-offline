import { createApiKey } from '../utils/index.js'

export default {
  apiKey: createApiKey(),
  corsAllowHeaders: 'accept,content-type,x-api-key,authorization',
  corsAllowOrigin: '*',
  corsDisallowCredentials: true,
  corsExposedHeaders: 'WWW-Authenticate,Server-Authorization',
  disableCookieValidation: false,
  disableScheduledEvents: false,
  dockerHost: 'localhost',
  dockerHostServicePath: null,
  dockerNetwork: null,
  dockerReadOnly: true,
  enforceSecureCookies: false,
  functionCleanupIdleTimeSeconds: 60,
  hideStackTraces: false,
  host: 'localhost',
  httpPort: 3000,
  httpsProtocol: '',
  lambdaPort: 3002,
  layersDir: null,
  localEnvironment: false,
  noAuth: false,
  noPrependStageInUrl: false,
  noStripTrailingSlashInUrl: false,
  noTimeout: false,
  prefix: '',
  printOutput: false,
  reloadHandler: false,
  resourceRoutes: false,
  useChildProcesses: false,
  useDocker: false,
  useInProcess: false,
  webSocketHardTimeout: 7200,
  webSocketIdleTimeout: 600,
  websocketPort: 3001,
}
