import React from 'react';

const DisplayImages = props => {
   return props.data.map((img, key) => (
      <div className="col-12 col-md-3 py-3" key={key}>
         <div className="card">
            <img
               src={img.urls.thumb}
               alt=""
               style={{ height: '320px' }}
               className="card-img-top"
            />
         </div>
      </div>
   ));
};

export default DisplayImages;
