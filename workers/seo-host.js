/**
 * Production HTML keeps https://cheatsmw4.org as the only canonical host.
 * The workers.dev preview must not be indexed. The custom domain is unchanged.
 */
function isPreviewHost(hostname) {
  return hostname === 'workers.dev' || hostname.endsWith('.workers.dev');
}

const PREVIEW_ROBOTS = 'User-agent: *\nDisallow: /\n';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const preview = isPreviewHost(url.hostname);

    if (preview && (url.pathname === '/robots.txt' || url.pathname === '/robots.txt/')) {
      return new Response(PREVIEW_ROBOTS, {
        headers: {
          'content-type': 'text/plain; charset=utf-8',
          'x-robots-tag': 'noindex, nofollow',
          'cache-control': 'public, max-age=300',
        },
      });
    }

    const response = await env.ASSETS.fetch(request);
    if (!preview) return response;

    const headers = new Headers(response.headers);
    headers.set('X-Robots-Tag', 'noindex, nofollow');
    const type = headers.get('content-type') || '';
    if (!type.includes('text/html')) {
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    const html = await response.text();
    const robotsMeta = '<meta name="robots" content="noindex, nofollow" />';
    const patched = /<meta\s+name=["']robots["']\s+content=["'][^"']*["']\s*\/?>/i.test(html)
      ? html.replace(/<meta\s+name=["']robots["']\s+content=["'][^"']*["']\s*\/?>/i, robotsMeta)
      : html.replace('<head>', `<head>${robotsMeta}`);
    headers.delete('content-length');
    return new Response(patched, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
