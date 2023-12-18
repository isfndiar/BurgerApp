import React from 'react'
import { mockData } from '../../services/mockData';
function IconFood() {
  return (
    <div className="menu-food-ratings flex w-[200px]  relative ">
          {mockData.map(item => (
            <img src={item.src} className={item.className} key={item.id} alt="" />
          ))}
        </div>
  )
}

export default IconFood;