import React from 'react';

const favoriteImage = (src) => {
  const img = new Image();

  let imageTag;

  img.src = src;

  if (img === undefined) {
    imageTag = (
      <img
        className="tabProfileImage "
        style={{
          backgroundColor: '#f7fafc',
        }}
        src={src}
        alt="No Img"
      />
    );
  } else if (img.width >= 1.5 * img.height || img.height >= 1.5 * img.width) {
    imageTag = (
      <img
        className="tabProfileImage "
        style={{
          backgroundColor: '#f7fafc',
          objectFit: 'fill',
          objectPosition: '50% 50%',
        }}
        src={src}
        alt="No Img"
      />
    );

    return imageTag;
  } else {
    imageTag = (
      <img
        className="tabProfileImage "
        style={{
          backgroundColor: '#f7fafc',
          objectFit: 'cover',
          objectPosition: '50% 50%',
        }}
        src={src}
        alt="No Img"
      />
    );

    return imageTag;
  }
};

export default favoriteImage;
