/// <reference types="vite/client" />
/// <reference types="@shopify/remix-oxygen" />
/// <reference types="@shopify/oxygen-workers-types" />

import type {HydrogenCart} from '@shopify/hydrogen';
import type {Storefront} from '~/lib/type';

declare global {
  const process: {env: {NODE_ENV: 'production' | 'development'}};
}

declare module '@shopify/remix-oxygen' {
  export interface AppLoadContext {
    waitUntil: ExecutionContext['waitUntil'];
    session: HydrogenSession;
    storefront: Storefront;
    cart: HydrogenCart;
    env: Env;
  }
}
