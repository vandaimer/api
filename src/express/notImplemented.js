export default function notImplemented (req, res) {
  const body = {
    path: req.originalUrl,
    status: 'not-implemented',
    now: new Date(),
  };

  return res.status(501).send(body);
}
