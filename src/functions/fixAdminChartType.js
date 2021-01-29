const fixAdminChartType = (type) => {
  let newType;

  switch (type) {
    // AGE
    case 'age18':
      newType = '< 18';
      break;
    case 'age1824':
      newType = '18-24';
      break;
    case 'age2534':
      newType = '25-34';
      break;
    case 'age3544':
      newType = '35-44';
      break;
    case 'age4554':
      newType = '45-54';
      break;
    case 'age5564':
      newType = '55-64';
      break;
    case 'age6574':
      newType = '65-74';
      break;
    case 'age75':
      newType = '> 75';
      break;

    //ETHNICITY
    case 'asian':
      newType = 'Asian';
      break;
    case 'indian':
      newType = 'Indian';
      break;
    case 'mexican':
      newType = 'Mexican';
      break;
    case 'multiracial':
      newType = 'Multiracial';
      break;
    case 'other':
      newType = 'Other';
      break;
    case 'otherHispanic':
      newType = 'Other Hispanic';
      break;
    case 'puertoRican':
      newType = 'Puerto Rican';
      break;
    case 'white':
      newType = 'White';
      break;

    //GENDER ID
    case 'female':
      newType = 'Female';
      break;
    case 'nonBinary':
      newType = 'Non-Binary';
      break;

    //SEXUAL ORIENTATION
    case 'lgbtqia':
      newType = 'LGBTQIA';
      break;
    case 'straight':
      newType = 'Straight';
      break;

    //ABILITY
    case 'disability':
      newType = 'Disability';
      break;
    case 'noDisability':
      newType = 'No Disability';
      break;

    //EDUCATION
    case 'associates':
      newType = 'Associates';
      break;
    case 'bachelors':
      newType = 'Bachelors';
      break;
    case 'diploma':
      newType = 'Highschool';
      break;
    case 'doctors':
      newType = 'Doctors';
      break;
    case 'masters':
      newType = 'Masters';
      break;
    case 'noHighschool':
      newType = '< Highschool';
      break;
    case 'someCollege':
      newType = 'Some College';
      break;

    //INCOME
    case 'lessFourtyK':
      newType = '< $40,000';
      break;
    case 'fourtyK':
      newType = '$40,000 - $79,999';
      break;
    case 'eightyK':
      newType = '$80,000 - $119,999';
      break;
    case 'hundoK':
      newType = '> $120,000';
      break;

    //NA
    case 'noAnswer':
      newType = 'No Answer';
      break;

    default:
      break;
  }

  return newType;
};

export default fixAdminChartType;
