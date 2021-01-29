import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';
import axios from 'axios';

const router: express.Router = express.Router();

//-----------------------------
//         GET ROUTES         |
//-----------------------------

//GET route for getting user profile data
router.get(
  '/about/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const userId = req.params.id;
    const queryText = `SELECT email, first_name, last_name, display_name, address, bio, city, community_role, mentor, mentee, access_level, facebook, headshot, instagram, job_title, linkedin, organization_name, state, twitter, zip_code FROM about JOIN "users" ON "about".user_id= "users".id WHERE "users".id=$1;`;
    pool
      .query(queryText, [userId])
      .then((response) => {
        res.send(response.rows);
      })
      .catch((err) => {
        console.log('Error completing GET profile query', err);
        res.sendStatus(500);
      });
  }
);

// retrieves basic profile information of all users to display
router.get(
  '/members',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryText = `SELECT display_name, community_role, organization_name, mentor, mentee, job_title, headshot, bio, email, first_name, last_name, address, city, state, zip_code, access_level, twitter, facebook, linkedin, instagram, member_level, "about".user_id FROM about
    JOIN "users" ON "about".user_id= "users".id
    JOIN "member" ON "users".id = "member".user_id;`;
    pool
      .query(queryText, [])
      .then((response) => {
        res.send(response.rows);
      })
      .catch((err) => {
        console.log('Error completing GET all profile query', err);
        res.sendStatus(500);
      });
  }
);

// specifically retrieves skills as they have been selected by each user
router.get(
  '/memberskills',
  (req: Request, res: Response, next: express.NextFunction) => {
    const query = `SELECT user_id, skill_id, category_id, skill FROM "users_skills"
    JOIN skills ON skills.id = users_skills.skill_id
    JOIN "category" ON "skills".category_id = category.id
    ORDER BY user_id;`;

    pool
      .query(query)
      .then((dbResponse) => {
        res.send(dbResponse.rows);
      })
      .catch((error) => {
        res.sendStatus(500);
      });
  }
);

//-----------------------------
//         PUT ROUTES         |
//-----------------------------

//PUT route for updating user profile data on about table
router.put(
  '/about/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const userId = req.params.id;
    const profile = req.body;

    const queryText = `UPDATE "about" SET display_name = $1, address = $2, bio = $3, city = $4, community_role = $5, facebook = $6, headshot = $7, instagram = $8,
                      job_title = $9, linkedin = $10, mentee = $11, mentor = $12, organization_name = $13, state = $14, twitter = $15, zip_code = $16 WHERE user_id = $17;`;
    pool
      .query(queryText, [
        profile.display_name,
        profile.address,
        profile.bio,
        profile.city,
        profile.community_role,
        profile.facebook,
        profile.headshot,
        profile.instagram,
        profile.job_title,
        profile.linkedin,
        profile.mentee,
        profile.mentor,
        profile.organization_name,
        profile.state,
        profile.twitter,
        profile.zip_code,
        userId,
      ])
      .then((response) => {
        res.send(response.rows);
        res.status(200);
      })
      .catch((err) => {
        console.log('PUT about table error:', err);
        res.status(500);
        res.send(err);
      });
  }
);

// specifically for updating identifying information
router.put(
  '/user/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const userId = req.params.id;
    const profile = req.body;

    const query = `UPDATE "users" SET email = $1, first_name = $2, last_name = $3, access_level = $4 WHERE id = $5;`;
    pool
      .query(query, [
        profile.email,
        profile.first_name,
        profile.last_name,
        profile.access_level,
        userId,
      ])
      .then((dbResponse) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

export default router;
