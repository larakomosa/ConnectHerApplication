import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

router.get(
  '/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    pool
      .query(
        `SELECT * FROM "chat_instance"
        WHERE user_1 = $1 OR user_2 = $1;
        `,
        [req.params.id]
      )
      .then((response) => {
        res.send(response.rows);
      })
      .catch((err) => {
        console.log('Error completing GET [chat] query', err);
        res.sendStatus(500);
      });
  }
);

router.get(
  '/chat_instance/:chat_id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    pool
      .query(
        `SELECT "messages".user, "messages".message FROM "chat_instance"
        JOIN "messages" ON "chat_instance".id = "messages".chat_id
        WHERE "chat_instance".id = $1
        ORDER BY "messages".id ASC;
        `,
        [req.params.chat_id]
      )
      .then((response) => {
        res.send(response.rows);
      })
      .catch((err) => {
        console.log('Error completing GET [chat_instance] query', err);
        res.sendStatus(500);
      });
  }
);

// router.get(
//   '/chat_instance/notification/:chat_id',
//   (req: Request, res: Response, next: express.NextFunction): void => {
//     console.log('in notif');
//     let firstLoad = false;
//     let responseLength;
//     let notification = false;
//     const checkForNewMessage = () => {
//       setTimeout(() => {
//         pool
//           .query(
//             `SELECT "messages".user, "messages".message FROM "chat_instance"
//         JOIN "messages" ON "chat_instance".id = "messages".chat_id
//         WHERE "chat_instance".id = $1
//         ORDER BY "messages".id ASC;
//         `,
//             [req.params.chat_id]
//           )
//           .then((response) => {
//             responseLength = response.rows.length;
//             if (firstLoad === true) {
//               if (responseLength > response.rows.length) {
//                 notification = true;
//               }
//             }
//             console.log(
//               firstLoad,
//               responseLength,
//               response.data.length,
//               notification
//             );
//             if (notification === true) {
//               res.send(response.rows);
//             } else {
//               checkForNewMessage();
//             }
//             firstLoad = true;
//           })
//           .catch((err) => {
//             console.log('Error completing GET [chat_instance] query', err);
//             res.sendStatus(500);
//           });
//       }, 5000);
//     };
//     checkForNewMessage();
//   }
// );

router.post(
  '/chat_instance/message/:chat_id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const user: number = req.body.user;
    const message: string = req.body.message;

    pool
      .query(
        `INSERT INTO "messages" ("chat_id", "user", "message")
      VALUES ($1, $2, $3)
      RETURNING chat_id;`,
        [req.params.chat_id, user, message]
      )
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(
          'Error completing POST [chat_instance[message]] query',
          err
        );
        res.sendStatus(500);
      });
  }
);

router.post(
  '/chat_instance',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const user1: number = req.body.user1;
    const user2: number = req.body.user2;

    pool
      .query(
        `INSERT INTO "chat_instance" ("user_1", "user_2")
      VALUES ($1, $2)
      RETURNING "id";`,
        [user1, user2]
      )
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log('Error completing POST [chat_instance] query', err);
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
