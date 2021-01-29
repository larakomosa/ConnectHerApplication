import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';
import { QueryConfig } from 'pg';

const router: express.Router = express.Router();

function queryNum(n: any, array: any): any {
  if (n <= 0) {
    return;
  } else {
    let skill = n + 1;
    let queryValues = `($1, $${skill})`;
    array.push(queryValues);
    queryNum(n - 1, array);
  }
}

//----------------------------
//        GET ROUTES         |
//----------------------------

//GET route for getting skills from the skills table
router.get(
  '/all',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryText = `SELECT * FROM "skills"`;

    pool
      .query(queryText)
      .then((dbResponse) => {
        res.send(dbResponse.rows);
      })
      .catch((err) => {
        console.log(`Error saving skill to database: ${err}`);
        res.sendStatus(500);
      });
  }
);

// GET skills that relate to signed in profile
router.get(
  '/profile-list/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const id = req.params.id;
    const queryText = `SELECT user_id, skill_id, skill, category_id FROM users_skills
  JOIN skills ON users_skills.skill_id = skills.id
  WHERE user_id = $1;`;

    pool
      .query(queryText, [id])
      .then((dbResponse) => {
        res.send(dbResponse.rows);
      })
      .catch((err) => {
        console.log(`Error retreiving skill from database: ${err}`);
        res.sendStatus(500);
      });
  }
);

//-----------------------------
//        POST ROUTES         |
//-----------------------------

//POST route for posting to the user_skills table
router.post(
  '/add',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const user_id = req.body.user_id;
    const skills = req.body.skills;

    const array: any[] = [];
    const numStart = skills.length;
    queryNum(numStart, array);

    const finalQuery = array.reverse().join(', ');
    skills.unshift(user_id);

    const query: QueryConfig = {
      text: `INSERT INTO "users_skills" (user_id, skill_id)
      VALUES ${finalQuery};`,
      values: skills,
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

//-------------------------------
//        DELETE ROUTES         |
//-------------------------------

//DELETE route for deleting a skill off profile
router.delete(
  '/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const id = req.params.id;
    const queryText = `DELETE FROM "users_skills" WHERE "user_id" = $1;`;

    pool
      .query(queryText, [id])
      .then((dbResponse) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log(`Error with delete: ${err}`);
        res.sendStatus(500);
      });
  }
);

export default router;
