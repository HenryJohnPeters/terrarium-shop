// lib/sanity.js
import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "zv5gb9yt", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name (usually "production")
  apiVersion: "2021-03-25", // Use the latest API version
  useCdn: true, // Use CDN for faster responses
});
