---
title: "Dynamic Routing in Next.js"
date: "2020-09-20"
---

Let's talk about when we want each page path to depend on external data (Dynamic Routing). Next.js allows you to statically generate pages with paths that depend on external data. This enables **dynamic URLs** in Next.js.

To create dynamic routes in Next.js you need to create a Pages file that begins with `[` and ends with `]`.(ex. [dynamic-page].js)

**We then use an async function called getStaticPaths:**

```
import Layout from '../../components/layout'

export default function Post() {
  return <Layout>...</Layout>
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}
```

getStaticPaths will return the list of possible values for our dynamic routing, in this case ids.

After we implement getStaticPaths in the [].js page, we need to implement it again to fetch the necessary data for the blog post with given id.

**Code:**

```
import Layout from '../../components/layout'

export default function Post() {
  return <Layout>...</Layout>
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}
```
