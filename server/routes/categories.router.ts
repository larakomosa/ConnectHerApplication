import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

router.get('/all', (req: Request, res: Response) => {
  const query = `SELECT * FROM category;`;

  pool
    .query(query)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

export default router;
