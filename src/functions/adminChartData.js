import { strict } from 'assert';

const adminChartData = (data) => {
  let returnData;
  if (data.call === 'data') {
    switch (data.type) {
      case 'age':
        returnData = {
          labels: [
            '18 or younger',
            '18-24',
            '25-34',
            '35-44',
            '45-54',
            '55-64',
            '65-74',
            '75 or older',
          ],
          datasets: [
            {
              data: [
                data.reducer.age18,
                data.reducer.age1824,
                data.reducer.age2534,
                data.reducer.age3544,
                data.reducer.age4554,
                data.reducer.age5564,
                data.reducer.age6574,
                data.reducer.age75,
              ],
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#63f542',
                '#e9f540',
                '#a740f5',
                '#f540d7',
                '#112991',
                '#0f7535',
              ],
              hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#63f542',
                '#e9f540',
                '#a740f5',
                '#f540d7',
                '#112991',
                '#0f7535',
              ],
            },
          ],
        };
        break;
      case 'ethnicity':
        returnData = {
          labels: [
            'American Indian or other Native American',
            'Asian, Asian American, or Pacific Islander',
            'Mexican or Mexican American',
            'Multiracial',
            'Other Hispanic or Latinx',
            'Puerto Rican',
            'White (non-Hispanic)',
            'Other',
            'Prefer not to answer',
          ],
          datasets: [
            {
              data: [
                data.reducer.indian,
                data.reducer.asian,
                data.reducer.mexican,
                data.reducer.multiracial,
                data.reducer.otherHispanic,
                data.reducer.puertoRican,
                data.reducer.white,
                data.reducer.other,
                data.reducer.noAnswer,
              ],
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#63f542',
                '#e9f540',
                '#a740f5',
                '#f540d7',
                '#112991',
                '#0f7535',
              ],
              hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#63f542',
                '#e9f540',
                '#a740f5',
                '#f540d7',
                '#112991',
                '#0f7535',
              ],
            },
          ],
        };
        break;
      case 'genderId':
        returnData = {
          labels: [
            'Female / Female-Identifying',
            'Non-Binary',
            'Prefer not to answer',
          ],
          datasets: [
            {
              data: [
                data.reducer.female,
                data.reducer.nonBinary,
                data.reducer.noAnswer,
              ],
              backgroundColor: ['#FF6384', '#36A2EB'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB'],
            },
          ],
        };
        break;
      case 'sexO':
        returnData = {
          labels: [
            'Straight / Heterosexual',
            'LGBTQIA+',
            'Prefer not to answer',
          ],
          datasets: [
            {
              data: [
                data.reducer.straight,
                data.reducer.lgbtqia,
                data.reducer.noAnswer,
              ],
              backgroundColor: ['#FF6384', '#36A2EB'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB'],
            },
          ],
        };
        break;
    }
  } else {
    returnData = {
      title: {
        display: true,
        text: data.type,
        fontSize: 20,
      },
      legend: {
        display: true,
        position: 'right',
      },
    };
  }

  return returnData;
};

export default adminChartData;
