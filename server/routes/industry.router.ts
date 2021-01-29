import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';
import { QueryConfig } from 'pg';

const router: express.Router = express.Router();

router.get('/all', (req: Request, res: Response) => {
  const query = `SELECT * FROM industry;`;

  pool
    .query(query)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

function queryNum(n: any, array: any): any {
  if (n <= 0) {
    return;
  } else {
    let selected = n + 1;
    let queryValues = `($1, $${selected})`;
    array.push(queryValues);
    queryNum(n - 1, array);
  }
}

router.get('/user/:Id', (req: Request, res: Response) => {
  const userId = req.params.Id;
  console.log('req.params', req.params.Id);
  const query = `SELECT "industry".name FROM "industry"
  JOIN "userIndustry" ON "userIndustry".selected = "industry".id
  WHERE user_id = $1`;
  pool
    .query(query, [userId])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

router.post(
  '/user',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const user_id = req.body.user_id;
    const selected = req.body.selected;

    const array: any[] = [];
    const numStart = selected.length;
    queryNum(numStart, array);

    const finalQuery = array.reverse().join(', ');
    selected.unshift(user_id);

    const query: QueryConfig = {
      text: `INSERT INTO "userIndustry" (user_id, selected)
      VALUES ${finalQuery};`,
      values: selected,
    };
    pool
      .query(query)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(`Error saving skill to database: ${err}`);
        res.sendStatus(500);
      });
  }
);

export default router;
