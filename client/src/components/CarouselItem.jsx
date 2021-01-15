import React from 'react';

const CarouselItem = (props) => {
  return (
    <div>
      <img src={props.imageUrl}></img>
      <div className="item-body">
        <div>
          {props.name}
        </div>
        <div>
          {`Stars: ${props.stars}`}
        </div>
        <div>
          {`Price: ${props.price}`}
        </div>
      </div>
    </div>
  )
}

export default CarouselItem;
