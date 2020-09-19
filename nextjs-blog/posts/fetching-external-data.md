---
title: "Using getStaticProps For Fetching External Data"
date: "2020-09-20"
---

We are going to be looking at **Static Generation** with data using getStaticProps.

From last post:

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.

In **development** getStaticProps runs on every request, but in **production** getStaticProps runs at build time. What this means is that you will not be able to use data that is only available during request time (query parameters or HTTP headers)

One retriction getStaticProps has is that it can only be exported from a page because React needs to have all the required data before page rendering.

You can use getStaticProps as a way to fetch **External APIs** or **Query Databases**:

**Fetching External API**

```
import fetch from 'node-fetch'

export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..')
  return res.json()
}
```

**Query Database Directly**

```
import someDatabaseSDK from 'someDatabaseSDK'

const databaseClient = someDatabaseSDK.createClient(...)

export async function getSortedPostsData() {
  // Instead of the file system,
  // fetch post data from a database
  return databaseClient.query('SELECT posts...')
}
```

**Note:** getStaticProps runs only on the server-side. It will never run client side, meaning it will not be included in the JS bundle for the browser. This means you can write direct database queries without sending them to the browser.
