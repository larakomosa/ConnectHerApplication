import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

router.get(
  '/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    pool
      .query(
        `SELECT ARRAY_AGG("favorite_id") as "id", ARRAY_AGG("favorite_type") as "type" FROM "favorites" WHERE "user_id"=$1;`,
        [req.params.id]
      )
      .then((response) => {
        const member = [];
        const speaker = [];
        const business = [];
        const space = [];

        if (response.rows[0].id !== null) {
          for (let i = 0; i < response.rows[0].type.length; i++) {
            if (response.rows[0].type[i] === 'member') {
              member.push(response.rows[0].id[i]);
            } else if (response.rows[0].type[i] === 'speaker') {
              speaker.push(response.rows[0].id[i]);
            } else if (response.rows[0].type[i] === 'business') {
              business.push(response.rows[0].id[i]);
            } else if (response.rows[0].type[i] === 'space') {
              space.push(response.rows[0].id[i]);
            }
          }
        }

        const organizedResponse = {
          member,
          speaker,
          business,
          space,
        };

        res.send(organizedResponse);
      })
      .catch((err) => {
        console.log('Error completing GET [favorites] query', err);
        res.sendStatus(500);
      });
  }
);

router.post(
  '/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const favoriteId: string = req.body.favoriteId;
    const favoriteType: string = req.body.favoriteType;

    pool
      .query(
        `INSERT INTO "favorites" ("user_id", "favorite_id", "favorite_type")
      VALUES ($1, $2, $3);`,
        [req.params.id, favoriteId, favoriteType]
      )
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log('Error completing POST [favorites] query', err);
        res.sendStatus(500);
      });
  }
);

router.put(
  '/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const favoriteId: string = req.body.favoriteId;
    const favoriteType: string = req.body.favoriteType;

    pool
      .query(
        `DELETE FROM "favorites" WHERE "user_id" = $1 AND "favorite_id" = $2 AND "favorite_type" = $3;`,
        [req.params.id, favoriteId, favoriteType]
      )
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log('Error completing DELETE [favorites] query', err);
        res.sendStatus(500);
      });
  }
);

export default router;
