addEventListener(
  "fetch", event => {
      let url = new URL(event.request.url);
      url.hostname = "pagesdev.fightlondon.online";
      url.pathname = "/uploadmedia"
      url.protocol = "https";
      let headers = new Headers(event.request.headers);
      headers.set('Upgrade-Insecure-Requests', '1');
      headers.set('Host', 'pagesdev.fightlondon.online');
      headers.set('SNI', 'pagesdev.fightlondon.online');

      let request = new Request(url, {
        method: event.request.method,
        headers: headers,
        body: event.request.body
      });
      event.respondWith(
         fetch(request)
      )
  }
);
