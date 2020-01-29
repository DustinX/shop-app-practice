import React from 'react';

const ItemSmall = (props) => {
  return (
    <a href={`/items/${props.item.id}`}>
      <li>
        {props.item.is_sold_out ? 
          <div className="is_sold_out">
            <div className="is_sold_out_inner">SOLD</div>
          </div>
          : false}
        <img loading="lazy" className="image" width="400px" height="400px" src={props.item.image}/>
        <p className="name">{props.item.name}</p>
        <p className="price">¥{props.item.price}</p>
        <p className="like_count">♡ {props.item.like_count}</p>
      </li>
    </a>
  )
}

export default ItemSmall;
