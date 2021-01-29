import { Request, Response } from 'express';
require('dotenv').config();
import express from 'express';
import pool from '../modules/pool';
import axios from 'axios';
const router: express.Router = express.Router();
const { response } = require('express');



const AIRTABLE_KEY = process.env.AIRTABLE_API_KEY;
const BASE = process.env.BASE;


router.get(
  '/speaker',
  (req: Request, res: Response, next: express.NextFunction): void => {
    axios({
      method: 'GET',
      // url: `https://api.airtable.com/v0/${BASE}/Imported%20table/recSuUlFzEY2Ju9WN`,
      url: `https://api.airtable.com/v0/${BASE}/Kansas%20City%20Diverse%20Speaker%20Directory`,
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`,
      },
    })
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  }
);

router.get(
  '/spaces',
  (req: Request, res: Response, next: express.NextFunction): void => {
    axios({
      method: 'GET',
      // url: `https://api.airtable.com/v0/${BASE}/Imported%20table/recSuUlFzEY2Ju9WN`,
      url: `https://api.airtable.com/v0/app1iZZ3DnqBxxEWd/Event%20Spaces%20in%20KC`,
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`,
      },
    })
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  }
);

router.get(
  '/businesses',
  (req: Request, res: Response, next: express.NextFunction): void => {
    axios({
      method: 'GET',
      // url: `https://api.airtable.com/v0/${BASE}/Imported%20table/recSuUlFzEY2Ju9WN`,
      url: `https://api.airtable.com/v0/appQMs9RQoFgjtSQX/Womxn%20Owned%20Businesses`,
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`,
      },
    })
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  }
);

router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    // POST route code here
  }
);

export default router;
