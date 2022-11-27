const findUrlForItem = ({ item, itemType }) => {
  switch (itemType.attributes.api_key) {
    case 'post':
      return `/posts/${item.attributes.slug}`;
    default:
      return null;
  }
};

const handler = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // This will allow OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).json({ success: true });
  }

  const url = findUrlForItem(req.body);

  if (!url) {
    return res.status(200).json({ previewLinks: [] });
  }

  const baseUrl = "https://localhost:3000"

  const previewLinks = [
    {
      label: 'Published version',
      url: `${baseUrl}${url}`,
    },
    {
      label: 'Draft version',
      url: `${baseUrl}/api/preview?redirect=${url}&secret=${process.env.sec_key || ''}`,
    },
  ];

  return res.status(200).json({ previewLinks });
};

export default handler;
