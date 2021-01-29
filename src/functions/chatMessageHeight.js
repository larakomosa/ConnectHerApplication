const chatMessageHeight = (message) => {
  let linePercentage = 0.0;
  let overrideCount = 0;
  let wordPercentage = 0.0;
  let height;

  let a = 1 / 19;
  let b = 1 / 19;
  let c = 1 / 22;
  let d = 1 / 19;
  let e = 1 / 19;
  let f = 1 / 42;
  let g = 1 / 19;
  let h = 1 / 19;
  let i = 1 / 49;
  let j = 1 / 49;
  let k = 1 / 22;
  let l = 1 / 49;
  let m = 1 / 13;
  let n = 1 / 19;
  let o = 1 / 19;
  let p = 1 / 19;
  let q = 1 / 19;
  let r = 1 / 33;
  let s = 1 / 22;
  let t = 1 / 39;
  let u = 1 / 19;
  let v = 1 / 22;
  let w = 1 / 15;
  let x = 1 / 22;
  let y = 1 / 22;
  let z = 1 / 22;

  let A = 1 / 16;
  let B = 1 / 16;
  let C = 1 / 15;
  let D = 1 / 15;
  let E = 1 / 16;
  let F = 1 / 18;
  let G = 1 / 14;
  let H = 1 / 15;
  let I = 1 / 39;
  let J = 1 / 22;
  let K = 1 / 16;
  let L = 1 / 19;
  let M = 1 / 13;
  let N = 1 / 15;
  let O = 1 / 19;
  let P = 1 / 16;
  let Q = 1 / 14;
  let R = 1 / 15;
  let S = 1 / 16;
  let T = 1 / 18;
  let U = 1 / 15;
  let V = 1 / 16;
  let W = 1 / 11;
  let X = 1 / 16;
  let Y = 1 / 16;
  let Z = 1 / 18;

  let space = 1 / 49;
  let period = 1 / 39;
  let comma = 1 / 39;
  let semicolon = 1 / 39;
  let single_quote = 1 / 57;
  let double_quote = 1 / 30;
  let misc = 1 / 42;

  const paragraphSplitArray = [];
  let wordToAdd = '';
  for (let ii = 0; ii < message.length; ii++) {
    if (message[ii] !== ' ') {
      wordToAdd += message[ii];
    } else {
      paragraphSplitArray.push(wordToAdd);
      paragraphSplitArray.push(' ');
      wordToAdd = '';
    }
  }
  if (wordToAdd !== '') {
    paragraphSplitArray.push(wordToAdd);
  }

  for (let iii = 0; iii < paragraphSplitArray.length; iii++) {
    for (let ii = 0; ii < paragraphSplitArray[iii].length; ii++) {
      if (paragraphSplitArray[iii][ii] === 'a') {
        wordPercentage += a;
      } else if (paragraphSplitArray[iii][ii] === 'b') {
        wordPercentage += b;
      } else if (paragraphSplitArray[iii][ii] === 'c') {
        wordPercentage += c;
      } else if (paragraphSplitArray[iii][ii] === 'd') {
        wordPercentage += d;
      } else if (paragraphSplitArray[iii][ii] === 'e') {
        wordPercentage += e;
      } else if (paragraphSplitArray[iii][ii] === 'f') {
        wordPercentage += f;
      } else if (paragraphSplitArray[iii][ii] === 'g') {
        wordPercentage += g;
      } else if (paragraphSplitArray[iii][ii] === 'h') {
        wordPercentage += h;
      } else if (paragraphSplitArray[iii][ii] === 'i') {
        wordPercentage += i;
      } else if (paragraphSplitArray[iii][ii] === 'j') {
        wordPercentage += j;
      } else if (paragraphSplitArray[iii][ii] === 'k') {
        wordPercentage += k;
      } else if (paragraphSplitArray[iii][ii] === 'l') {
        wordPercentage += l;
      } else if (paragraphSplitArray[iii][ii] === 'm') {
        wordPercentage += m;
      } else if (paragraphSplitArray[iii][ii] === 'n') {
        wordPercentage += n;
      } else if (paragraphSplitArray[iii][ii] === 'o') {
        wordPercentage += o;
      } else if (paragraphSplitArray[iii][ii] === 'p') {
        wordPercentage += p;
      } else if (paragraphSplitArray[iii][ii] === 'q') {
        wordPercentage += q;
      } else if (paragraphSplitArray[iii][ii] === 'r') {
        wordPercentage += r;
      } else if (paragraphSplitArray[iii][ii] === 's') {
        wordPercentage += s;
      } else if (paragraphSplitArray[iii][ii] === 't') {
        wordPercentage += t;
      } else if (paragraphSplitArray[iii][ii] === 'u') {
        wordPercentage += u;
      } else if (paragraphSplitArray[iii][ii] === 'v') {
        wordPercentage += v;
      } else if (paragraphSplitArray[iii][ii] === 'w') {
        wordPercentage += w;
      } else if (paragraphSplitArray[iii][ii] === 'x') {
        wordPercentage += x;
      } else if (paragraphSplitArray[iii][ii] === 'y') {
        wordPercentage += y;
      } else if (paragraphSplitArray[iii][ii] === 'z') {
        wordPercentage += z;
      } else if (paragraphSplitArray[iii][ii] === 'A') {
        wordPercentage += A;
      } else if (paragraphSplitArray[iii][ii] === 'B') {
        wordPercentage += B;
      } else if (paragraphSplitArray[iii][ii] === 'C') {
        wordPercentage += C;
      } else if (paragraphSplitArray[iii][ii] === 'D') {
        wordPercentage += D;
      } else if (paragraphSplitArray[iii][ii] === 'E') {
        wordPercentage += E;
      } else if (paragraphSplitArray[iii][ii] === 'F') {
        wordPercentage += F;
      } else if (paragraphSplitArray[iii][ii] === 'G') {
        wordPercentage += G;
      } else if (paragraphSplitArray[iii][ii] === 'H') {
        wordPercentage += H;
      } else if (paragraphSplitArray[iii][ii] === 'I') {
        wordPercentage += I;
      } else if (paragraphSplitArray[iii][ii] === 'J') {
        wordPercentage += J;
      } else if (paragraphSplitArray[iii][ii] === 'K') {
        wordPercentage += K;
      } else if (paragraphSplitArray[iii][ii] === 'L') {
        wordPercentage += L;
      } else if (paragraphSplitArray[iii][ii] === 'M') {
        wordPercentage += M;
      } else if (paragraphSplitArray[iii][ii] === 'N') {
        wordPercentage += N;
      } else if (paragraphSplitArray[iii][ii] === 'O') {
        wordPercentage += O;
      } else if (paragraphSplitArray[iii][ii] === 'P') {
        wordPercentage += P;
      } else if (paragraphSplitArray[iii][ii] === 'Q') {
        wordPercentage += Q;
      } else if (paragraphSplitArray[iii][ii] === 'R') {
        wordPercentage += R;
      } else if (paragraphSplitArray[iii][ii] === 'S') {
        wordPercentage += S;
      } else if (paragraphSplitArray[iii][ii] === 'T') {
        wordPercentage += T;
      } else if (paragraphSplitArray[iii][ii] === 'U') {
        wordPercentage += U;
      } else if (paragraphSplitArray[iii][ii] === 'V') {
        wordPercentage += V;
      } else if (paragraphSplitArray[iii][ii] === 'W') {
        wordPercentage += W;
      } else if (paragraphSplitArray[iii][ii] === 'X') {
        wordPercentage += X;
      } else if (paragraphSplitArray[iii][ii] === 'Y') {
        wordPercentage += Y;
      } else if (paragraphSplitArray[iii][ii] === 'Z') {
        wordPercentage += Z;
      } else if (paragraphSplitArray[iii][ii] === ' ') {
        wordPercentage += space;
      } else if (paragraphSplitArray[iii][ii] === '.') {
        wordPercentage += period;
      } else if (paragraphSplitArray[iii][ii] === ',') {
        wordPercentage += comma;
      } else if (paragraphSplitArray[iii][ii] === ';') {
        wordPercentage += semicolon;
      } else if (paragraphSplitArray[iii][ii] === `'`) {
        wordPercentage += single_quote;
      } else if (paragraphSplitArray[iii][ii] === `"`) {
        wordPercentage += double_quote;
      } else {
        wordPercentage += misc;
      }
    }
    if ((linePercentage % 1) + wordPercentage > 1) {
      linePercentage = 1 - (linePercentage % 1) + linePercentage + 0.01;
      linePercentage += wordPercentage;
      wordPercentage = 0.0;
      overrideCount += 1 - (linePercentage % 1);
    } else {
      linePercentage += wordPercentage;
      wordPercentage = 0.0;
    }
    // console.log(linePercentage, paragraphSplitArray[iii], overrideCount); UNCOMMENT TO DEBUG
  }

  if (linePercentage < 1.01) {
    height = '32px';
  } else if (linePercentage < 2.01) {
    height = '53px';
  } else if (linePercentage < 3.01) {
    height = '74px';
  } else if (linePercentage < 4.01) {
    height = '95px';
  } else if (linePercentage < 5.01) {
    height = '116px';
  } else if (linePercentage < 6.01) {
    height = '137px';
  } else if (linePercentage < 7.01) {
    height = '158px';
  } else if (linePercentage < 8.01) {
    height = '179px';
  } else if (linePercentage < 9.01) {
    height = '200px';
  } else if (linePercentage < 10.01) {
    height = '221px';
  } else if (linePercentage < 11.01) {
    height = '241px';
  } else if (linePercentage < 12.01) {
    height = '262px';
  } else if (linePercentage < 13.01) {
    height = '283px';
  } else if (linePercentage < 14.01) {
    height = '304px';
  } else if (linePercentage < 15.01) {
    height = '325px';
  }

  return height;
};

export default chatMessageHeight;
