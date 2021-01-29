import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

//POST route for posting to the about table
router.post(
  '/register/about/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    console.log(req.body);
    const displayName: string = req.body.displayName;
    const communityRole: string = req.body.role;
    const organizationName: string = req.body.organization;
    const jobTitle: string = req.body.title;
    const address: string = req.body.streetAddress;
    const city: string = req.body.city;
    const state: string = req.body.state;
    const zipCode: number = req.body.zipcode;
    const linkedin: string = req.body.linkedin;
    const facebook: string = req.body.facebook;
    const twitter: string = req.body.twitter;
    const instagram: string = req.body.instagram;
    const headshotPic: string = req.body.headshot;
    const bio: string = req.body.bio;
    const tshirtSize: string = req.body.shirtSize;
    const birthday: any = req.body.birthday;
    const mentor: boolean = req.body.mentor;
    const mentee: boolean = req.body.mentee;
    const userId: any = req.params.id;

    const queryText = `INSERT INTO "about" (display_name, community_role, organization_name, job_title, address, city, state, zip_code, linkedin, facebook, twitter, instagram, headshot, bio, tshirt_size, birthday, mentor, mentee, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19);`;
    pool
      .query(queryText, [
        displayName,
        communityRole,
        organizationName,
        jobTitle,
        address,
        city,
        state,
        zipCode,
        linkedin,
        facebook,
        twitter,
        instagram,
        headshotPic,
        bio,
        tshirtSize,
        birthday,
        mentor,
        mentee,
        userId,
      ])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('Error completing about table POST query', err);
        res.sendStatus(500);
      });
  }
);

//POST route for posting to the demographic table
router.post(
  '/register/demographic/:id',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const age = req.body.age;
    const ethnicity = req.body.ethnicity;
    const gender = req.body.gender;
    const sexualOrientation = req.body.sexual_orientation;
    const ability = req.body.ability;
    const income = req.body.income_level;
    const education = req.body.education_level;
    const userId = req.params.id;

    const queryText = `INSERT INTO "demographic" (age, ethnicity, gender, sexual_orientation, ability, income, education, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
    pool
      .query(queryText, [
        age,
        ethnicity,
        gender,
        sexualOrientation,
        ability,
        income,
        education,
        userId,
      ])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('Error completing demographic table POST query', err);
        res.sendStatus(500);
      });
  }
);

export default router;
