/* eslint-disable import/no-anonymous-default-export */

// ENABLES PREVIEW MODE
export default async (req, res) => {
  if (req.query.secret !== process.env.SEC_KEY) {
    return res.status(401).json({ message: 'Wrong key!' })
  }
  res.setPreviewData({})
  res.end(`Preview mode enabled!`);
}