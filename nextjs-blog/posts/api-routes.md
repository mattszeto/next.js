---
title: "API Routing in Next.js"
date: "2020-09-19"
tag: "Next.js"
---

**API routing** lets you create API endpoints inside of a Next.js application.

For example, we can create API endpoints by creating a function inside of a file called api in our pages directory.

```
export default (req, res) => {
  res.status(200).json({ text: 'Hello' })
}
```

This will in turn create a endpoint at ../api/hello where you would be able to see the text Hello printed on the screen.

To break it down even further,

req = instance of http.IncomingMessage, and some pre-built middlewares.
res = instance of http.ServerResponse, and some helper functions.

**Things to note:**

- Do not fetch an API Route from **getStaticProps** or **getStaticPaths** (the functions we learned in previous posts), what you want to do instead is write the server-side code directly in these functions.

**A good use case: Handling Form Input**

ex.

```
export default (req, res) => {
  const email = req.body.email
  // Then save email to your database, etc...
}
```

There are also **Dynampic API Routes** we can cover later on.
