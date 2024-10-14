import { renderToString } from "react-dom/server";
import React from "react";
import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (request, reply) => {
  reply.type("text/html").send(`
    <!DOCTYPE html>
    <html> 
      <head>
        <title>Fastify + React</title>
        </head>  
        <body>
          <div id="root">
            ${renderToString(<h1>Hello, world!</h1>)}
          </div>
          <script src="/dist/client.js"></script>
          </body>
    </html>;
    `);
});

try {
  await fastify.listen({ port: 8080 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
