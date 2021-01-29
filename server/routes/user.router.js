const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const email = req.body.email;
  const password = encryptLib.encryptPassword(req.body.password);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  const queryText = `INSERT INTO "users" (email, password, first_name, last_name)
    VALUES ($1, $2, $3, $4) RETURNING id`;
  pool
    .query(queryText, [email, password, firstName, lastName])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.post('/level/:Id', (req, res, next) => {
  const user = req.params.Id;
  const level = req.body.member_level;

  const queryText = `INSERT INTO "member" (user_id, member_level)
    VALUES ($1, $2) RETURNING id`;
  pool
    .query(queryText, [user, level])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

// router.get('/level', (req, res) => {
//   const queryText = `SELECT * FROM member_level;`;

//   pool
//     .query(queryText)
//     .then((dbResponse) => {
//       console.log(dbResponse);
//       res.send(dbResponse.rows);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.sendStatus('Retrieve Access Level Error', 500);
//     });
// });

module.exports = router;
