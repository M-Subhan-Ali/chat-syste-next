# Next.js WebSocket Chat – Project Structure

This project uses **Next.js** with a **custom WebSocket server (Socket.IO)**.

## Folder Structure

```
websocket-next/
│
├── app/
│   ├── page.js        # Main chat UI page
│   └── layout.js      # Root layout for the Next.js app
│
├── public/            # Static files (images, icons, etc.)
│
├── server.js          # Custom Node.js server running Next.js + Socket.IO
│
├── package.json       # Project dependencies and scripts
├── next.config.js     # Next.js configuration
│
└── node_modules/      # Installed npm packages
```

---

## Explanation of Each Part

### `app/`

This folder contains the **Next.js App Router pages**.

* **page.js**

  * Main page of the application
  * Contains the chat UI
  * Connects to the WebSocket server using `socket.io-client`

* **layout.js**

  * Root layout for the entire app
  * Defines shared HTML structure (like `<html>` and `<body>`)

---

### `public/`

Used for **static assets**.

Examples:

* images
* icons
* fonts

Example:

```
public/
 ├── logo.png
 └── avatar.png
```

These files can be accessed in the browser like:

```
http://localhost:3000/logo.png
```

---

### `server.js`

This is the **custom Node.js server**.

It performs two jobs:

1. Runs the **Next.js application**
2. Runs the **Socket.IO WebSocket server**

Example responsibilities:

* Accept WebSocket connections
* Receive chat messages
* Broadcast messages to all connected clients

---

### `package.json`

Defines:

* project metadata
* dependencies
* scripts

Example scripts:

```
npm run dev
npm run build
npm start
```

Dependencies include:

* `next`
* `react`
* `socket.io`
* `socket.io-client`

---

### `next.config.js`

Configuration file for **Next.js**.

You can configure things like:

* environment variables
* image domains
* experimental features
* webpack settings

---

### `node_modules/`

Contains all **installed npm packages**.

Example:

```
node_modules/
 ├── react
 ├── next
 ├── socket.io
 └── socket.io-client
```

You should **never edit this folder manually**.

---

## How the App Works

```
Browser
   │
   │ WebSocket Connection
   ▼
Socket.IO Server (server.js)
   │
   │ Broadcast message
   ▼
All connected clients
```

Flow example:

1. User sends message
2. Client emits `message` event
3. Server receives message
4. Server broadcasts message to all clients
5. All clients update UI

---

## Running the Project

Install dependencies:

```
npm install
```

Start development server:

```
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## Tech Stack

* Next.js
* Node.js
* Socket.IO
* WebSockets
