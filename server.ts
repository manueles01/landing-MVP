import {createRequestHandler} from '@shopify/remix-oxygen';
import * as build from '@remix-run/dev/server-build';

export default {
  async fetch(
    request: Request,
    env: Env,
    executionContext: ExecutionContext,
  ): Promise<Response> {
    try {
      const handleRequest = createRequestHandler({
        build,
        mode: process.env.NODE_ENV,
      });

      return await handleRequest(request);
    } catch (error) {
      console.log(error);
      return new Response('An unexpected error occurred', {status: 500});
    }
  },
};
