let lastWindowWidth = window.innerWidth;
let lastWindowHeight = window.innerHeight;
let bool;

const hasWindowSizeChanged = (window) => {
  bool = false;
  if (window === undefined) return bool;
  if (window.width !== lastWindowWidth || window.height !== lastWindowHeight) {
    lastWindowHeight = window.height;
    lastWindowWidth = window.width;
    bool = true;
  }

  return bool;
};

export default hasWindowSizeChanged;
