import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const user = req.body.user_id;
    const myers_briggs = req.body.myers_briggs;
    const disc = req.body.disc;
    const agility_index = req.body.agility_index;
    const enneagram = req.body.enneagram;
    console.log(
      'console log back side',
      req.body,
      user,
      myers_briggs,
      disc,
      agility_index,
      enneagram
    );
    const queryText = `INSERT INTO "personality" (user_id, myers_briggs, disc, agility_index, enneagram) VALUES ($1, $2, $3, $4, $5);`;
    pool
      .query(queryText, [user, myers_briggs, disc, agility_index, enneagram])
      .then(() => {
        res.sendStatus(200);
      })

      .catch((err) => {
        console.log('Error completing POST [personality] query', err);
        res.sendStatus(500);
      });
  }
);

router.get('/:Id', (req: Request, res: Response) => {
  const userId = req.params.Id;
  console.log('req.params', req.params.Id);
  const query = `SELECT * FROM "personality" WHERE "personality".user_id = $1;`;
  pool
    .query(query, [userId])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

export default router;
