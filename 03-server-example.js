Bun.serve({
    port: 3000,
    fetch(req) {
      let url = new URL(req.url);
      if (req.method === "GET") {
        if (url.pathname === "/") return new Response("{fruta: banana}");
        if (url.pathname === "/score") return new Response("{score: 10}");
        if (url.pathname === "/rank") return new Response('{"1": "Joelma", "2": "Ximbinha" }');
        return new Response("404!");
      }

      if (req.method === "POST") {
        if (url.pathname === "/score") return new Response("Gravado score");
      }
    },
});