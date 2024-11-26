// ./schemas/image.js
export default {
  name: "image",
  title: "Image",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Optional: allows for image cropping within Sanity
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
};
