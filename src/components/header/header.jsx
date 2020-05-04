import React from 'react';
import s from './header.module.css';


const header = () => {
    return (
        <div className="container">
          <header className={s.header}>
              <img src="https://assets.3dtotal.com/32---neuromancer-4k.xdnsen.image.jsy.jpg" className={s.icon}></img>
          </header>
         </div>
    )
}

export default header;
