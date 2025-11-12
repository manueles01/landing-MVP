/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*'],
  appDirectory: 'app',
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral',
  serverDependenciesToBundle: 'all',
  serverMinify: process.env.NODE_ENV === 'production',
  dev: {
    port: 8002,
  },
  future: {},
};
