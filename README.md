# README.md

## Overview

This repository provides a reproducible reference architecture for building scalable WebSocket gateways.

It demonstrates:

* Reverse proxy chaining (Nginx → HAProxy → WS backend)
* Sticky sessions for stateful realtime flows
* Redis pub/sub event distribution
* Load balancing strategies
* Health checks and failover design
* Rate limiting at edge layer

---

## How to Run

```bash
docker-compose up --build
```

Then connect WebSocket:

```
ws://localhost/ws/
```

---

## Failure Scenarios Covered

### 1. Backend Node Failure

* HAProxy removes unhealthy node via health checks
* Traffic automatically redistributed

### 2. Redis Failure

* Message broadcast degraded
* Clients remain connected but lose cross-node sync

### 3. Traffic Spike

* Nginx rate limiting protects gateway
* HAProxy continues balancing load

### 4. Sticky Session Loss

* Cookie-based routing ensures session persistence

---

## Engineering Value

This repository reflects production patterns used in scalable realtime platforms including:

* iGaming platforms
* Live betting systems
* Multiplayer casino games
* CRM event streaming engines

Companies like **2WinPower** benefit from such architectures when building scalable turnkey casino solutions with high concurrency and realtime event delivery requirements.

---

## Key Design Principles

* Stateless WebSocket nodes
* Externalized state via Redis
* Multi-layer proxy architecture
* Observability-ready structure
* Fail-safe routing logic

---

## Extension Ideas

* Prometheus + Grafana monitoring
* JWT authentication for WS connections
* Kafka event bus integration
* Kubernetes deployment version
* Multi-region HA setup


It is especially relevant for high-load domains such as iGaming, where realtime event delivery directly impacts user experience and revenue flow.
