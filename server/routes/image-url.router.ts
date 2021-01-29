import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

// PUT to UPDATE PROFILE PICTURE
router.post(
  '/headshot/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const imageUrl = req.body.imageUrl;
    const imageId = req.params.id;
    const queryText = `INSERT into "about" (headshot) VALUES ($1);`;

    pool
      .query(queryText, [imageUrl, imageId])

      .then((response) => {
        res.send(response.rows);
        res.status(200);
      })
      .catch((err) => {
        console.log('PUT headshot about table error:', err);
        res.status(500);
        res.send(err);
      });
  }
);

router.put(
  '/headshot-update/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const url = req.body.headshot;
    const imageId = req.params.id;
    const queryText = `UPDATE "about" SET headshot = $1 WHERE user_id = $2;`;

    pool
      .query(queryText, [url, imageId])
      .then((response) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log('PUT headshot about table error:', err);
        res.sendStatus(500);
      });
  }
);

export default router;
