import { query, Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

//GET route for getting the count for each age
router.get(
  '/age',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryText = `SELECT COUNT(age) FROM "demographic" WHERE age = '18 years of age or less';`;
    pool
      .query(queryText)
      .then((dbResponse) => {
        console.log(dbResponse.rows[0].count);
        const age18 = dbResponse.rows[0].count;
        const queryText = `SELECT COUNT(age) FROM "demographic" WHERE age = '18-24';`;
        pool
          .query(queryText)
          .then((dbResponse) => {
            const age1824 = dbResponse.rows[0].count;
            const queryText = `SELECT COUNT(age) FROM "demographic" WHERE age = '25-34';`;
            pool
              .query(queryText)
              .then((dbResponse) => {
                const age2534 = dbResponse.rows[0].count;
                const queryText = `SELECT COUNT(age) FROM "demographic" WHERE age = '35-44';`;
                pool
                  .query(queryText)
                  .then((dbResponse) => {
                    const age3544 = dbResponse.rows[0].count;
                    const queryText = `SELECT COUNT(age) FROM "demographic" WHERE age = '45-54';`;
                    pool
                      .query(queryText)
                      .then((dbResponse) => {
                        const age4554 = dbResponse.rows[0].count;
                        const queryText = `SELECT COUNT(age) FROM "demographic" WHERE age = '55-64';`;
                        pool
                          .query(queryText)
                          .then((dbResponse) => {
                            const age5564 = dbResponse.rows[0].count;
                            const queryText = `SELECT COUNT(age) FROM "demographic" WHERE age = '65-74';`;
                            pool
                              .query(queryText)
                              .then((dbResponse) => {
                                const age6574 = dbResponse.rows[0].count;
                                const queryText = `SELECT COUNT(age) FROM "demographic" WHERE age = '75 years of age or greater';`;
                                pool
                                  .query(queryText)
                                  .then((dbResponse) => {
                                    const age75 = dbResponse.rows[0].count;

                                    res.send({
                                      age18: age18,
                                      age1824: age1824,
                                      age2534: age2534,
                                      age3544: age3544,
                                      age4554: age4554,
                                      age5564: age5564,
                                      age6574: age6574,
                                      age75: age75,
                                    });
                                  })
                                  .catch((err) => {
                                    console.log(err);
                                    res.sendStatus(500);
                                  });
                              })
                              .catch((err) => {
                                console.log(err);
                                res.sendStatus(500);
                              });
                          })
                          .catch((err) => {
                            console.log(err);
                            res.sendStatus(500);
                          });
                      })
                      .catch((err) => {
                        console.log(err);
                        res.sendStatus(500);
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                    res.sendStatus(500);
                  });
              })
              .catch((err) => {
                console.log(err);
                res.sendStatus(500);
              });
          })
          .catch((err) => {
            console.log(err);
            res.sendStatus(500);
          });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

// GET route to get count for each ethnicity
router.get(
  '/ethnicity',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryText = `SELECT COUNT(ethnicity) FROM "demographic" WHERE ethnicity = 'American Indian or other Native American';`;
    pool
      .query(queryText)
      .then((dbResponse) => {
        const indian = dbResponse.rows[0].count;
        const queryText = `SELECT COUNT(ethnicity) FROM "demographic" WHERE ethnicity = 'Asian, Asian American, or Pacific Islander';`;
        pool
          .query(queryText)
          .then((dbResponse) => {
            const asian = dbResponse.rows[0].count;
            const queryText = `SELECT COUNT(ethnicity) FROM "demographic" WHERE ethnicity = 'Mexican or Mexican American';`;
            pool
              .query(queryText)
              .then((dbResponse) => {
                const mexican = dbResponse.rows[0].count;
                const queryText = `SELECT COUNT(ethnicity) FROM "demographic" WHERE ethnicity = 'Multiracial';`;
                pool
                  .query(queryText)
                  .then((dbResponse) => {
                    const multiracial = dbResponse.rows[0].count;
                    const queryText = `SELECT COUNT(ethnicity) FROM "demographic" WHERE ethnicity = 'Other Hispanic or Latinx';`;
                    pool
                      .query(queryText)
                      .then((dbResponse) => {
                        const otherHispanic = dbResponse.rows[0].count;
                        const queryText = `SELECT COUNT(ethnicity) FROM "demographic" WHERE ethnicity = 'Puerto Rican';`;
                        pool
                          .query(queryText)
                          .then((dbResponse) => {
                            const puertoRican = dbResponse.rows[0].count;
                            const queryText = `SELECT COUNT(ethnicity) FROM "demographic" WHERE ethnicity = 'White (non-Hispanic)';`;
                            pool
                              .query(queryText)
                              .then((dbResponse) => {
                                const white = dbResponse.rows[0].count;
                                const queryText = `SELECT COUNT(ethnicity) FROM "demographic" WHERE ethnicity = 'Other';`;
                                pool
                                  .query(queryText)
                                  .then((dbResponse) => {
                                    const other = dbResponse.rows[0].count;
                                    const queryText = `SELECT COUNT(ethnicity) FROM "demographic" WHERE ethnicity = 'I prefer not to answer';`;
                                    pool
                                      .query(queryText)
                                      .then((dbResponse) => {
                                        const noAnswer =
                                          dbResponse.rows[0].count;
                                        res.send({
                                          indian: indian,
                                          asian: asian,
                                          mexican: mexican,
                                          multiracial: multiracial,
                                          otherHispanic: otherHispanic,
                                          puertoRican: puertoRican,
                                          white: white,
                                          other: other,
                                          noAnswer: noAnswer,
                                        });
                                      })
                                      .catch((err) => {
                                        console.log(err);
                                        res.sendStatus(500);
                                      });
                                  })
                                  .catch((err) => {
                                    console.log(err);
                                    res.sendStatus(500);
                                  });
                              })
                              .catch((err) => {
                                console.log(err);
                                res.sendStatus(500);
                              });
                          })
                          .catch((err) => {
                            console.log(err);
                            res.sendStatus(500);
                          });
                      })
                      .catch((err) => {
                        console.log(err);
                        res.sendStatus(500);
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                    res.sendStatus(500);
                  });
              })
              .catch((err) => {
                console.log(err);
                res.sendStatus(500);
              });
          })
          .catch((err) => {
            console.log(err);
            res.sendStatus(500);
          });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

// GET route to get count for gender
router.get(
  '/gender',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryText = `SELECT COUNT(gender) FROM "demographic" WHERE gender = 'Female / Female-Identifying';`;
    pool
      .query(queryText)
      .then((dbResponse) => {
        const female = dbResponse.rows[0].count;
        const queryText = `SELECT COUNT(gender) FROM "demographic" WHERE gender = 'Non-Binary';`;
        pool
          .query(queryText)
          .then((dbResponse) => {
            const nonBinary = dbResponse.rows[0].count;
            const queryText = `SELECT COUNT(gender) FROM "demographic" WHERE gender = 'I prefer not to answer';`;
            pool
              .query(queryText)
              .then((dbResponse) => {
                const noAnswer = dbResponse.rows[0].count;
                res.send({
                  female: female,
                  nonBinary: nonBinary,
                  noAnswer: noAnswer,
                });
              })
              .catch((err) => {
                console.log(err);
                res.sendStatus(500);
              });
          })
          .catch((err) => {
            console.log(err);
            res.sendStatus(500);
          });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

//GET route to get count for sexual orientation
router.get(
  '/sexual-orientation',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryText = `SELECT COUNT(sexual_orientation) FROM "demographic" WHERE sexual_orientation = 'Straight / Heterosexual';`;
    pool
      .query(queryText)
      .then((dbResponse) => {
        const straight = dbResponse.rows[0].count;
        const queryText = `SELECT COUNT(sexual_orientation) FROM "demographic" WHERE sexual_orientation = 'LGBTQIA+';`;
        pool
          .query(queryText)
          .then((dbResponse) => {
            const lgbtqia = dbResponse.rows[0].count;
            const queryText = `SELECT COUNT(sexual_orientation) FROM "demographic" WHERE sexual_orientation = 'I prefer not to answer';`;
            pool
              .query(queryText)
              .then((dbResponse) => {
                const noAnswer = dbResponse.rows[0].count;

                res.send({
                  straight: straight,
                  lgbtqia: lgbtqia,
                  noAnswer: noAnswer,
                });
              })
              .catch((err) => {
                console.log(err);
                res.sendStatus(500);
              });
          })
          .catch((err) => {
            console.log(err);
            res.sendStatus(500);
          });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

//GET route to get count for Ability Level
router.get(
  '/ability',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryText = `SELECT COUNT(ability) FROM "demographic" WHERE ability = 'I have a disability';`;
    pool
      .query(queryText)
      .then((dbResponse) => {
        const disability = dbResponse.rows[0].count;
        const queryText = `SELECT COUNT(ability) FROM "demographic" WHERE ability = 'I do not have a disability';`;
        pool
          .query(queryText)
          .then((dbResponse) => {
            const noDisability = dbResponse.rows[0].count;
            const queryText = `SELECT COUNT(ability) FROM "demographic" WHERE ability = 'I prefer not to answer';`;
            pool
              .query(queryText)
              .then((dbResponse) => {
                const noAnswer = dbResponse.rows[0].count;

                res.send({
                  disability: disability,
                  noDisability: noDisability,
                  noAnswer: noAnswer,
                });
              })
              .catch((err) => {
                console.log(err);
                res.sendStatus(500);
              });
          })
          .catch((err) => {
            console.log(err);
            res.sendStatus(500);
          });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

// GET route to get count for Income
router.get(
  '/income',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryText = `SELECT COUNT(income) FROM "demographic" WHERE income = '<40000';`;
    pool
      .query(queryText)
      .then((dbResponse) => {
        const lessFourtyK = dbResponse.rows[0].count;
        const queryText = `SELECT COUNT(income) FROM "demographic" WHERE income = '40000-79999';`;
        pool
          .query(queryText)
          .then((dbResponse) => {
            const fourtyK = dbResponse.rows[0].count;
            const queryText = `SELECT COUNT(income) FROM "demographic" WHERE income = '80000-119999';`;
            pool
              .query(queryText)
              .then((dbResponse) => {
                const eightyK = dbResponse.rows[0].count;
                const queryText = `SELECT COUNT(income) FROM "demographic" WHERE income = '>120,000';`;
                pool
                  .query(queryText)
                  .then((dbResponse) => {
                    const hundoK = dbResponse.rows[0].count;
                    const queryText = `SELECT COUNT(income) FROM "demographic" WHERE income = 'I prefer not to answer';`;
                    pool
                      .query(queryText)
                      .then((dbResponse) => {
                        const noAnswer = dbResponse.rows[0].count;

                        res.send({
                          lessFourtyK: lessFourtyK,
                          fourtyK: fourtyK,
                          eightyK: eightyK,
                          hundoK: hundoK,
                          noAnswer: noAnswer,
                        });
                      })
                      .catch((err) => {
                        console.log(err);
                        res.sendStatus(500);
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                    res.sendStatus(500);
                  });
              })
              .catch((err) => {
                console.log(err);
                res.sendStatus(500);
              });
          })
          .catch((err) => {
            console.log(err);
            res.sendStatus(500);
          });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

//GET route for getting the count for Education
router.get(
  '/education',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryText = `SELECT COUNT(education) FROM "demographic" WHERE education = 'Less than high school';`;
    pool
      .query(queryText)
      .then((dbResponse) => {
        console.log(dbResponse.rows[0].count);
        const noHighschool = dbResponse.rows[0].count;
        const queryText = `SELECT COUNT(education) FROM "demographic" WHERE education = 'High School diploma or GED';`;
        pool
          .query(queryText)
          .then((dbResponse) => {
            const diploma = dbResponse.rows[0].count;
            const queryText = `SELECT COUNT(education) FROM "demographic" WHERE education = 'Some College';`;
            pool
              .query(queryText)
              .then((dbResponse) => {
                const someCollege = dbResponse.rows[0].count;
                const queryText = `SELECT COUNT(education) FROM "demographic" WHERE education = 'Associate Degree';`;
                pool
                  .query(queryText)
                  .then((dbResponse) => {
                    const associates = dbResponse.rows[0].count;
                    const queryText = `SELECT COUNT(education) FROM "demographic" WHERE education = 'Bachelor Degree';`;
                    pool
                      .query(queryText)
                      .then((dbResponse) => {
                        const bachelors = dbResponse.rows[0].count;
                        const queryText = `SELECT COUNT(education) FROM "demographic" WHERE education = 'Master Degree';`;
                        pool
                          .query(queryText)
                          .then((dbResponse) => {
                            const masters = dbResponse.rows[0].count;
                            const queryText = `SELECT COUNT(education) FROM "demographic" WHERE education = 'Doctoral Degree';`;
                            pool
                              .query(queryText)
                              .then((dbResponse) => {
                                const doctors = dbResponse.rows[0].count;
                                const queryText = `SELECT COUNT(education) FROM "demographic" WHERE education = 'I prefer not to answer';`;
                                pool
                                  .query(queryText)
                                  .then((dbResponse) => {
                                    const noAnswer = dbResponse.rows[0].count;

                                    res.send({
                                      noHighschool: noHighschool,
                                      diploma: diploma,
                                      someCollege: someCollege,
                                      associates: associates,
                                      bachelors: bachelors,
                                      masters: masters,
                                      doctors: doctors,
                                      noAnswer: noAnswer,
                                    });
                                  })
                                  .catch((err) => {
                                    console.log(err);
                                    res.sendStatus(500);
                                  });
                              })
                              .catch((err) => {
                                console.log(err);
                                res.sendStatus(500);
                              });
                          })
                          .catch((err) => {
                            console.log(err);
                            res.sendStatus(500);
                          });
                      })
                      .catch((err) => {
                        console.log(err);
                        res.sendStatus(500);
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                    res.sendStatus(500);
                  });
              })
              .catch((err) => {
                console.log(err);
                res.sendStatus(500);
              });
          })
          .catch((err) => {
            console.log(err);
            res.sendStatus(500);
          });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);
/**
 * POST route template
 */
// router.post(
//   '/',
//   (req: Request, res: Response, next: express.NextFunction): void => {
//     // POST route code here
//   }
// );

export default router;
