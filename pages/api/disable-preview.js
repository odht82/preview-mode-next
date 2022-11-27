/* eslint-disable import/no-anonymous-default-export */

// EXIT PREVIEW MODE...THEN REDIRECT TO HOME
export default async (req, res) => {
  res.clearPreviewData();
  res.end('disabled preview mode!')
  // res.redirect('/');
};
