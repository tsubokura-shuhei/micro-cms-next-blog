import { createClient } from "microcms-js-sdk";
export const client = createClient({
  serviceDomain: "blog-with-microcms-tsubokura",
  apiKey: process.env.API_KEY,
});
