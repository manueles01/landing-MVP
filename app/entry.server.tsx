import type {EntryContext} from '@shopify/remix-oxygen';
import {RemixServer} from '@remix-run/react';
import {isbot} from 'isbot';
import {renderToString} from 'react-dom/server';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set('Content-Type', 'text/html');
  return new Response('<!DOCTYPE html>' + markup, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
