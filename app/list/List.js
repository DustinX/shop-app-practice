import React, {useState, useEffect} from 'react';
import ItemSmall from './ItemSmall';

import menuIcon from '../icons/menu.png';
import bellIcon from '../icons/bell.png';
import checkIcon from '../icons/check.png';
import cameraIcon from '../icons/camera.png';


const List = () => {
  
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('1');
  
  // fetch items and categories.  Only runs once on page load
  useEffect(()=>{
    
    fetch("http://localhost:5000/items")
      .then(res => res.json())
        .then( result => {
            setItems(result.data);
          },
          (error) => {
            console.error(error);
          }
    )
    
    fetch("http://localhost:5000/categories")
      .then(res => res.json())
        .then( result => {
            setCategories(result.data);
          },
          (error) => {
            console.error(error);
          }
    )
    
  }, [])
  
  return (
    <div className="list_page">
      <div id="navbar">
        <div id="navbar_top">
          <img id="menu_icon" src={menuIcon}/>
          <input id="search_box" type="text" placeholder="検索"/>
          <img id="bell_icon" src={bellIcon}/>
          <img id="check_icon" src={checkIcon}/>
        </div>
        <div id="navbar_bottom">{categories
                    .map( category => <p  key={category.id} 
                                          className="category" 
                                          onClick={() => setCategory( category.id ) }>
                                            {category.name}
                                      </p>)}</div>
      </div>
      <ul>{ items
              .filter( item => item.category_id == category || category == 1)
              .map( item => <ItemSmall key={item.id} item={item} />)} </ul>
      <div id="camera_button">
        <p    id="camera_text">出品</p>
        <img  id="camera_icon" src={cameraIcon}/>
      </div>
    </div>
  )
}

export default List;
