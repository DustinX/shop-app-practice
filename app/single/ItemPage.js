import React, {useState, useEffect} from 'react';
import {
  useParams
} from "react-router-dom";

import backIcon from '../icons/back.png';
import searchIcon from '../icons/search.png';
import shareIcon from '../icons/share.png';
import commentIcon from '../icons/comment.png';
import flagIcon from '../icons/flag.png';


const ItemPage = () => {
  let { id } = useParams();
  
  const [item, setItem] = useState([]);

  useEffect(()=>{
    
    fetch(`http://localhost:5000/items/${id}`)
      .then(res => res.json())
        .then( result => {
            if(result === null){
              window.location.href = '\\';
            }
            setItem(result);
          },
          (error) => {
            console.error(error);
          }
    )

  }, [])
  
  
  return (
    <div className="itemPage__p">
      <div className= "top_section__p">
        <a href="\">
          <img className= "back_button__p" src={backIcon}/>
        </a>
        <p className=   "name_top__p">{item.name}</p>
        <img className= "search_button__p" src={searchIcon}/>
        <img className= "share_button__p" src={shareIcon}/>
      </div>
      <img className= "image__p" src={item.image}/>
      <p className=   "name_bottom__p">{item.name}</p>
      <div className= "mid_section__p">
        <div className= "like_button__p">♡いいね！</div>
        <p className=   "like_count__p">{item.like_count}</p>
        <div className= "comment_button__p">
          <img className="comment_icon__p" src={commentIcon}/>
          コメント
        </div>
        <div className="flag_button__p">
          <img className= "flag_icon__p" src={flagIcon}/>
        </div>
      </div>
      <p className=   "description_header__p">商品の説明</p>
      <p className=   "description__p">{item.description}</p>
      <div className=   "order_section__p">
        <p className=   "price__p">¥{item.price}</p>
        <p className=   "shipping_fee__p">{/\d+/.test(item.shipping_fee) ? '¥' : false}{item.shipping_fee}</p>
        <p className=   "order_button__p">購入手続きへ</p>
      </div>
    </div>
  )
}

export default ItemPage;
