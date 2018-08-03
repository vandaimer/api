export default function healthCheck(req, res) {
  const body = {
    path: req.originalUrl,
    status: 'OK',
    now: new Date(),
  };

  return res.status(200).send(body);
}
