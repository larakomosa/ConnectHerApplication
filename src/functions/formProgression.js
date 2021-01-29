import function_list from './list';

const formProgression = (data) => {
  console.log(data);
  let bool;

  if (data.tab === '1') bool = true;

  if (data.tab === '2') {
    if (data.form.register !== undefined) {
      bool = true;
    } else {
      function_list.alert('Please fill out User Information before moving on!');
      bool = false;
    }
  }

  if (data.tab === '3') {
    if (data.form.about !== undefined) {
      bool = true;
    } else {
      function_list.alert(
        'Please fill out User Information, and About Me before moving on!'
      );
      bool = false;
    }
  }

  if (data.tab === '4') {
    if (data.form.demo !== undefined) {
      bool = true;
    } else {
      function_list.alert(
        'Please fill out User Information, About Me, and Demographic Information before moving on!'
      );
      bool = false;
    }
  }

  return bool;
};

export default formProgression;
