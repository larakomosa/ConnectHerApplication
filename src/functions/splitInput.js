import { each } from 'lodash';

const splitInput = (input) => {
  const newArray = [];
  let word = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== '*') {
      word += input[i];
      if (word === ' ') {
        word = '';
      }
    } else {
      newArray.push(word);
      word = '';
    }
  }
  if (word !== '' || word !== '*') {
    newArray.push(word);
  }
  if (word === '') {
    newArray.pop();
  }
  console.log(newArray);
  return newArray;
};

export default splitInput;
