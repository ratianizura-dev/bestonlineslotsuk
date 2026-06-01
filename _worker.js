export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;

    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    const routes = {
      '/':               '/index.html',
      '/about':          '/about.html',
      '/privacy-policy': '/privacy-policy.html',
      '/terms':          '/terms.html',
      '/contact':        '/contact.html',
    };

    const file = routes[path];

    if (file) {
      return env.ASSETS.fetch(new URL(file, request.url));
    }

    return new Response('Page not found', { status: 404 });
  },
};
