import truesearch from 'truesearch';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const query = req.query.phone;
    const mq = `+${query}`;
    const id = req.query.id;

    const result = await truesearch(mq, id);
    res.json(result);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}