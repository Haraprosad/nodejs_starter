[⬅️Back](../README.md)

<span style="color:purple;font-size:1.8em; font-weight:bold;">1.Express.js Server Setup</span>

***
This guide will walk you through the process of setting up and running a server using Express.js, a popular Node.js web application framework.

### Prerequisites

Before you begin, make sure you have Node.js installed on your machine. You can download it from the official website: [https://nodejs.org](https://nodejs.org)

### Step 1: Install Express.js

Open your terminal and navigate to your project directory. Then, run the following command to install Express.js:

```bash
npm install express
```

### Step 2: Create a Server File

Create a new file called `app.js` (or any name you prefer) in your project directory. This file will contain the code for your Express.js server.

```jsx
const express = require("express");
const app = express();
const PORT = 3000; // You can change this to any available port

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
```

### Step 3: Install Nodemon (Optional)

Nodemon is a utility that automatically restarts your server whenever you make changes to your code. This can be helpful during development to avoid manually restarting the server after every change.

Install Nodemon globally:

```bash
npm install -g nodemon
```

### Step 4: Run the Server

If you installed Nodemon, you can run the server using the following command:

```bash
nodemon app.js
```

Alternatively, you can add a start script to your `package.json` file, which will allow you to run the server with `npm start`:

```json
{
  "scripts": {
    "start": "nodemon app.js"
  }
}
```

Then, you can run the server with:

```bash
npm start
```

That's it! Your Express.js server should now be up and running. You can access it by visiting `http://localhost:3000` in your web browser.

***
