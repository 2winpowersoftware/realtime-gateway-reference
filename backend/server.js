const WebSocket = require("ws");
const Redis = require("ioredis");

const serverId = process.env.SERVER_ID || "ws";

const wss = new WebSocket.Server({ port: 3000 });

const pub = new Redis(process.env.REDIS_HOST);
const sub = new Redis(process.env.REDIS_HOST);

sub.subscribe("realtime");

sub.on("message", (channel, message) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(`[${serverId}] ${message}`);
    }
  });
});

wss.on("connection", (ws) => {
  ws.send(`Connected to ${serverId}`);

  ws.on("message", (msg) => {
    pub.publish("realtime", msg.toString());
  });
});

console.log(`WebSocket server ${serverId} running on port 3000`);
