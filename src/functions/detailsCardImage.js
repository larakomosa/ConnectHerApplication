import React from 'react';

const detailsCardImage = (src) => {
  const img = new Image();

  let businessImageTag;
  let modalBusinessImageTag;

  img.src = src;

  if (img.width >= 1.5 * img.height || img.height >= 1.5 * img.width) {
    businessImageTag = (
      <img
        style={{
          objectFit: 'fit',
          objectPosition: '50% 50%',
          width: '122px',
          height: '122px',
        }}
        src={src}
        alt="logo"
      />
    );
    modalBusinessImageTag = (
      <img
        style={{
          objectFit: 'fit',
          objectPosition: '50% 50%',
          width: '147px',
          height: '147px',
        }}
        src={src}
        alt="logo"
      />
    );
    return { cardTag: businessImageTag, modalTag: modalBusinessImageTag };
  } else {
    businessImageTag = (
      <img
        style={{
          objectFit: 'cover',
          objectPosition: '50% 50%',
          width: '122px',
          height: '122px',
        }}
        src={src}
        alt="logo"
      />
    );
    modalBusinessImageTag = (
      <img
        style={{
          objectFit: 'cover',
          objectPosition: '50% 50%',
          width: '147px',
          height: '147px',
        }}
        src={src}
        alt="logo"
      />
    );
    return { cardTag: businessImageTag, modalTag: modalBusinessImageTag };
  }
};

export default detailsCardImage;
