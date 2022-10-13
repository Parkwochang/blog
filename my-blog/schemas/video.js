export default {
  name: 'video',
  type: 'object',
  title: 'Video',
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'metadata',
      title: 'Metadata',
      type: 'urlWithMetadata',
    },
  ],
  preview: {
    select: {
      title: 'caption',
      subtitle: 'metadata.url',
    },
  },
};
