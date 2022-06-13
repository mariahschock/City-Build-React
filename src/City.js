import React from 'react';

export default function City({ waterfrontId, skylineId, castleId }) {
  return (
    <div className="city">
      <section>
        <img src={`${waterfrontId}.jpeg`} />
        <img src={`${skylineId}.jpeg`} />
        <img src={`${castleId}.jpeg`} />
      </section>
      {/* this component should take 3 props: waterfrontId, skylineId, and castlId */}
      {/* use these 3 ids in img tags load approriate images that live in the public directory */}
    </div>
  );
}
